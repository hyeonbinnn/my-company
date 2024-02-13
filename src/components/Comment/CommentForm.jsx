import React, { useState } from 'react';
import * as S from './CommentForm.style';
import comment from '../../assets/comment.png';
import CommentModal from '../Modal/CommentModal';
import useModal from './../../hooks/useModal';

const CommentForm = () => {
  const [inputComment, setInputComment] = useState('');
  const { isModalOpen, openModal, closeModal } = useModal();

  const onSubmit = (e) => {
    e.preventDefault();
    openModal();
    setInputComment('');
  };

  const handleInputChange = (e) => {
    setInputComment(e.target.value);
  };

  return (
    <>
      <S.MainWrap>
        <S.MainBox>
          <S.MainImg src={comment} alt="댓글 아이콘" />
          <S.MainSpan>댓글</S.MainSpan>
        </S.MainBox>
        <S.MainForm onSubmit={onSubmit}>
          <label htmlFor="comment" className="a11y-hidden">
            댓글 입력창
          </label>
          <S.MainInput
            type="text"
            required
            placeholder="댓글을 작성해주세요."
            value={inputComment}
            onChange={handleInputChange}
          />
          <S.MainBtn>등록</S.MainBtn>
        </S.MainForm>
      </S.MainWrap>
      {isModalOpen && <CommentModal onClose={closeModal} />}
    </>
  );
};

export default CommentForm;
