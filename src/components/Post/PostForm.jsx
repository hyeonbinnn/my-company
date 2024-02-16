import React from 'react';
import * as S from './PostFrom.style';
import { useForm } from 'react-hook-form';
import { useCreatePost } from '../../api/post';
import { useQueryClient } from 'react-query';
import UploadModal from './../Modal/UploadModal';
import useModal from './../../hooks/useModal';
import Loading from './../Loading/Loading';
import Error from './../Error/Error';

const PostForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { isModalOpen, openModal, closeModal } = useModal();
  const queryClient = useQueryClient();
  const { mutate: createPost, isLoading, isError } = useCreatePost();

  const onSubmit = async (data) => {
    try {
      await createPost(data);
      queryClient.invalidateQueries('posts');
      console.log('게시글이 업로드되었습니다.');
      reset();
      openModal();
    } catch (error) {
      console.error('게시글 업로드 실패', error);
    }
  };

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <Error
        content="게시글을 업로드하는 중에 문제가 발생했습니다."
        nextContent="나중에 다시 시도해 주세요."
      />
    );

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
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
      {isModalOpen && <UploadModal onClose={closeModal} />}
    </>
  );
};

export default PostForm;
