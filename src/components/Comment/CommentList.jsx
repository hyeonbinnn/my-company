import React, { useState, useEffect } from 'react';
import * as S from './CommentList.style';
import user from '../../assets/user.png';
import { useParams } from 'react-router-dom';
import { getComment } from '../../api/post';

const CommentList = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchCommentGet = async () => {
      try {
        const commentData = await getComment(id);
        setComments(commentData);
      } catch (error) {
        console.log('댓글 추가 중 오류 발생', error);
      }
    };

    fetchCommentGet();
  }, []);

  return (
    <S.Container>
      {comments.map((comment) => (
        <S.ContentWrap key={comment.id}>
          <S.UserInfo>
            <S.ContentImg src={user} />
            <S.ContentEmail> {comment.email}</S.ContentEmail>
          </S.UserInfo>
          <S.ContentComment>{comment.body}</S.ContentComment>
        </S.ContentWrap>
      ))}
    </S.Container>
  );
};

export default CommentList;
