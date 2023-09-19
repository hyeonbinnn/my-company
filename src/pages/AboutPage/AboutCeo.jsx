import React from 'react';
import styled from 'styled-components';
import HeaderLayout from '../../components/common/Layout/HeaderLayout';
import MainLayout from '../../components/common/Layout/MainLayout';
import SocialBar from '../../components/common/Bar/SocialBar';
import { Main } from '../../components/common/Layout/MainLayout';
import about from '../../assets/about.png';

const AboutCeo = () => {
  return (
    <>
      <HeaderLayout />
      <CustomMain>
        <MainLayout icon={about} iconTxt="회사 건물 아이콘" title="CEO" />
        <Section></Section>
      </CustomMain>
      <SocialBar />
    </>
  );
};

export default AboutCeo;

const CustomMain = styled(Main)`
  padding: 0px 30px;
`;

const Section = styled.section``;
