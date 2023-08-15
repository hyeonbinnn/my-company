import React from 'react';
import * as S from './RecruitHeader.style';
import NavBar from '../common/Bar/NavBar';

const RecruitHeader = () => {
  return (
    <S.Header>
      <S.Container>
        <NavBar />
      </S.Container>
    </S.Header>
  );
};

export default RecruitHeader;
