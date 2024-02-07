import React, { useState, useEffect } from 'react';
import * as S from './PostDetail.style';
import HeaderLayout from './../../components/Layout/HeaderLayout';
import MainLayout from './../../components/Layout/MainLayout';
import SocialBar from './../../components/Bar/SocialBar';
import postDetail from '../../assets/poster.png';
import trash from '../../assets/trash.png';
import { getDetailPost, deletePost } from '../../api/post';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { deletedPostState } from '../../recoil/atom/atoms';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const [deletedPost, setDeletedPost] = useRecoilState(deletedPostState);

  useEffect(() => {
    fetchPostDetail();
  }, [id]);

  const fetchPostDetail = async () => {
    try {
      const postData = await getDetailPost(id);
      setPost(postData);
    } catch (error) {
      console.error('게시글 세부 정보 불러오는 중 오류 발생', error);
    }
  };

  const goToNotice = () => {
    navigate('/notice');
  };

  const handleDeletePost = async () => {
    try {
      await deletePost(id);
      setDeletedPost([...deletedPost, id]);
      goToNotice();
    } catch (error) {
      console.log('게시글 삭제 중 오류 발생', error);
    }
  };
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
                <S.DeleteBtn onClick={handleDeletePost}>
                  <S.DeleteImg src={trash} alt="쓰레기통 아이콘" />
                </S.DeleteBtn>
              </S.Title>

              <S.Content>{post.body}</S.Content>
            </S.PostSection>
          )}
        </S.Container>
      </S.CustomMain>
      <SocialBar />
    </>
  );
};

export default PostDetail;
