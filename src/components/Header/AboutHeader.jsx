import React from 'react';
import * as S from './AboutHeader.style';
import TopBar from '../common/Bar/TopBar';

const AboutHeader = () => {
  return (
    <S.Header>
      <S.Container>
        <TopBar />
      </S.Container>
    </S.Header>
  );
};

export default AboutHeader;
