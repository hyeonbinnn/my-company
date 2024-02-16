import React from 'react';
import styled from 'styled-components';
import { Main } from '../../components/Layout/MainLayout';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import SocialBar from '../../components/Bar/SocialBar';
import PostForm from '../../components/Post/PostForm';
import MainLayout from '../../components/Layout/MainLayout';
import post from '../../assets/post.png';

export const CustomMain = styled(Main)`
  padding: 0px 30px;
`;

const UploadPost = () => {
  return (
    <>
      <HeaderLayout />
      <CustomMain>
        <MainLayout
          icon={post}
          iconTxt="게시글 작성 아이콘"
          title="Post"
          desc="게시글 작성"
        ></MainLayout>
        <PostForm />
      </CustomMain>
      <SocialBar />
    </>
  );
};

export default UploadPost;
