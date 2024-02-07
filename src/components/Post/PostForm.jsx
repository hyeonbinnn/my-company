import React from 'react';
import * as S from './PostFrom.style';
import { useForm } from 'react-hook-form';
import { createPost } from '../../api/post';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const goToNotice = () => {
    navigate('/notice');
  };

  const onSubmit = handleSubmit((data) => {
    createPost(data)
      .then((res) => {
        console.log('게시글이 업로드되었습니다.', res);
        reset();
        goToNotice();
      })
      .catch((error) => {
        console.log('게시글 업로드 실패', error);
      });
  });

  return (
    <>
      <S.Form onSubmit={onSubmit}>
        <S.Section>
          <S.TitleBox>
            <label htmlFor="title" className="a11y-hidden">
              제목
            </label>
            <S.Title type="text" id="title" placeholder="제목" {...register('title')} />
          </S.TitleBox>
          <S.ContentBox>
            <label htmlFor="content" className="a11y-hidden">
              내용
            </label>
            <S.Content
              type="body"
              id="content"
              placeholder="내용을 입력해주세요."
              {...register('content')}
            />
          </S.ContentBox>
        </S.Section>
        <S.UploadButton type="submit">업로드</S.UploadButton>
      </S.Form>
    </>
  );
};

export default PostForm;
