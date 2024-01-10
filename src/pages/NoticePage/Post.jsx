import React from 'react';
import styled from 'styled-components';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import SocialBar from '../../components/Bar/SocialBar';
import PostForm from '../../components/Post/PostForm';
import { Main } from '../../components/Layout/MainLayout';
import post from '../../assets/post.png';
import MainLayout from '../../components/Layout/MainLayout';

export const CustomMain = styled(Main)`
  padding: 0px 30px;
`;

const Post = () => {
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

export default Post;
