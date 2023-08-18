import React from 'react';
import * as S from './AboutHeader.style';
import NavBar from '../common/Bar/NavBar';

const AboutHeader = () => {
  return (
    <S.CustomHeader>
      <S.CustomContainer>
        <NavBar />
      </S.CustomContainer>
    </S.CustomHeader>
  );
};

export default AboutHeader;
