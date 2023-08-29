import React from 'react';
import NavBar from '../common/Bar/NavBar';
import { Header, Container } from '../common/Layout/HeaderLayout';
import styled from 'styled-components';

const AboutHeader = () => {
  return (
    <CustomHeader>
      <CustomContainer>
        <NavBar />
      </CustomContainer>
    </CustomHeader>
  );
};

export default AboutHeader;

export const CustomHeader = styled(Header)``;

export const CustomContainer = styled(Container)`
  padding: 20px 0 170px;
`;
