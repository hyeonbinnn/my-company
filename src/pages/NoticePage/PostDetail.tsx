import * as S from './PostDetail.style';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useQueryClient } from 'react-query';
import { useGetDetailPost, useDeletePost } from '../../api/post';
import { deletedPostState, DeletePostState } from '../../recoil/atoms';
import { navigateTo, scrollToTop } from '../../utils/utils';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import MainLayout from '../../components/Layout/MainLayout';
import SocialBar from '../../components/Bar/SocialBar';
import postDetail from '../../assets/poster.png';
import trash from '../../assets/trash.png';
import DeleteModal from '../../components/Modal/DeleteModal';
import CommentForm from '../../components/Comment/CommentForm';
import CommentList from '../../components/Comment/CommentList';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useModal from '../../hooks/useModal';

const PostDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const postId = id ? parseInt(id, 10) : 0; // id가 undefined일 경우 0으로 설정
  const { isModalOpen, openModal, closeModal } = useModal();
  const [deletedPost, setDeletedPost] = useRecoilState<DeletePostState>(deletedPostState);
  const queryClient = useQueryClient();
  const deletePostMutation = useDeletePost();
  const { data: post, isLoading, isError } = useGetDetailPost(postId);

  const handleDeletePost = async () => {
    try {
      await deletePostMutation.mutateAsync(postId);
      setDeletedPost({ deletedId: [...deletedPost.deletedId, postId] });
      navigateTo(navigate, '/notice');
      scrollToTop();
      closeModal();
      console.log('게시글 삭제 완료');
      queryClient.invalidateQueries(['post', postId]);
      console.log('게시글 쿼리 무효화됨:', ['post', postId]);
    } catch (error) {
      console.log('게시글 삭제 중 오류 발생', error);
    }
  };

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <Error
        content="게시글을 불러오는 중, 문제가 발생했습니다."
        nextContent="나중에 다시 시도해 주세요."
      />
    );

  return (
    <>
      <HeaderLayout />
      <S.CustomMain>
        <MainLayout
          icon={postDetail}
          iconTxt="게시글 아이콘"
          title="Notice"
          desc="게시글"
        ></MainLayout>
        <S.Container>
          {post && (
            <S.PostSection>
              <S.Title>
                <S.H3>{post.title}</S.H3>
                <S.DeleteBtn onClick={openModal}>
                  <S.DeleteImg src={trash} alt="쓰레기통 아이콘" />
                </S.DeleteBtn>
              </S.Title>
              <S.Content>{post.body}</S.Content>
            </S.PostSection>
          )}
          <CommentForm />
          <CommentList />
        </S.Container>
      </S.CustomMain>
      <SocialBar />
      {isModalOpen && <DeleteModal onClose={closeModal} onConfirm={handleDeletePost} />}
    </>
  );
};

export default PostDetail;
