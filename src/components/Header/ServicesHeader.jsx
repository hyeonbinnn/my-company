import React from 'react';
import NavBar from '../common/Bar/NavBar';
import styled from 'styled-components';
import { Header, Container } from '../common/Layout/HeaderLayout';

const ServicesHeader = () => {
  return (
    <CustomHeader>
      <CustomContainer>
        <NavBar />
      </CustomContainer>
    </CustomHeader>
  );
};

export default ServicesHeader;

export const CustomHeader = styled(Header)``;

export const CustomContainer = styled(Container)`
  padding: 20px 0 170px;
`;
