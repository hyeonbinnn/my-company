import * as S from './CommentList.style';
import { Comment } from '../../types/data';
import { useParams } from 'react-router-dom';
import { useGetComment } from '../../api/post';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import user from '../../assets/user.png';

const CommentList = () => {
  const { id } = useParams();
  const postId = id ? parseInt(id, 10) : 0;
  const { data: comments, isLoading, isError } = useGetComment(postId);

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <Error
        content="댓글을 불러오는 중, 문제가 발생했습니다."
        nextContent="나중에 다시 시도해 주세요."
      />
    );

  return (
    <S.Container>
      {comments &&
        comments.map((comment: Comment) => (
          <S.ContentWrap key={comment.id}>
            <S.UserInfo>
              <S.ContentImg src={user} />
              <S.ContentEmail>{comment.email}</S.ContentEmail>
            </S.UserInfo>
            <S.ContentComment>{comment.body}</S.ContentComment>
          </S.ContentWrap>
        ))}
    </S.Container>
  );
};

export default CommentList;
