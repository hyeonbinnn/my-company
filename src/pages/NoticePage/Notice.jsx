import React from 'react';
import * as S from './Notice.style';
import { Link } from 'react-router-dom';
import SocialBar from '../../components/Bar/SocialBar';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import notice from '../../assets/notice.png';
import MainLayout from '../../components/Layout/MainLayout';
import PostList from '../../components/Post/PostList';

const Notice = () => {
  return (
    <>
      <HeaderLayout />
      <S.CustomMain>
        <MainLayout icon={notice} iconTxt="공지 아이콘" title="Notice" desc="공지 게시판" />
        <Link to="/notice/upload">
          <S.CreateBtn>게시글 작성</S.CreateBtn>
        </Link>
        <S.Section>
          <h1 className="a11y-hidden">공지 게시판</h1>
          <PostList />
        </S.Section>
      </S.CustomMain>
      <SocialBar />
    </>
  );
};

export default Notice;
