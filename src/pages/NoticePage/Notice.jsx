import React from 'react';
import SocialBar from '../../components/common/Bar/SocialBar';
import NoticeMain from '../../components/Main/NoticeMain';
import HeaderLayout from '../../components/common/Layout/HeaderLayout';

const Notice = () => {
  return (
    <>
      <HeaderLayout />
      <NoticeMain />
      <SocialBar />
    </>
  );
};

export default Notice;
