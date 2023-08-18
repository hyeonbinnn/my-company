import React from 'react';
import * as S from './ServicesHeader.style';
import NavBar from '../common/Bar/NavBar';

const ServicesHeader = () => {
  return (
    <S.CustomHeader>
      <S.CustomContainer>
        <NavBar />
      </S.CustomContainer>
    </S.CustomHeader>
  );
};

export default ServicesHeader;
