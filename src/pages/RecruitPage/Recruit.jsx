import React from 'react';
import SocialBar from '../../components/common/Bar/SocialBar';
import RecruitMain from './../../components/Main/RecruitMain';
import HeaderLayout from '../../components/common/Layout/HeaderLayout';

const Recruit = () => {
  return (
    <>
      <HeaderLayout />
      <RecruitMain />
      <SocialBar />
    </>
  );
};

export default Recruit;
