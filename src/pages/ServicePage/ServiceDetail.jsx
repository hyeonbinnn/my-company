import React from 'react';
import styled from 'styled-components';
import HeaderLayout from '../../components/common/Layout/HeaderLayout';
import MainLayout from '../../components/common/Layout/MainLayout';
import SocialBar from './../../components/common/Bar/SocialBar';
import { Main } from '../../components/common/Layout/MainLayout';
import service from '../../assets/service.png';

const Product = () => {
  return (
    <>
      <HeaderLayout />
      <CustomMain>
        <MainLayout icon={service} iconTxt="서비스 아이콘" title="Service" />
        <Section></Section>
      </CustomMain>
      <SocialBar />
    </>
  );
};

export default Product;

const CustomMain = styled(Main)`
  padding: 0px 30px;
`;

const Section = styled.section``;
