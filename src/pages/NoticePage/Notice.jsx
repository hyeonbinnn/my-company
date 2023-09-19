import React from 'react';
import * as S from './Notice.style';
import SocialBar from '../../components/common/Bar/SocialBar';
import HeaderLayout from '../../components/common/Layout/HeaderLayout';
import notice from '../../assets/notice.png';
import MainLayout from '../../components/common/Layout/MainLayout';
import PostList from '../../components/Post/PostList';

const Notice = () => {
  return (
    <>
      <HeaderLayout />
      <S.CustomMain>
        <MainLayout
          icon={notice}
          iconTxt="공지 아이콘"
          title="Notice"
          desc="공지 게시판"
        ></MainLayout>
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
