import React from 'react';
import * as S from './AboutHeader.style';
import NavBar from '../common/Bar/NavBar';

const AboutHeader = () => {
  return (
    <S.Header>
      <S.Container>
        <NavBar />
      </S.Container>
    </S.Header>
  );
};

export default AboutHeader;
