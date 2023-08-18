import React from 'react';
import * as S from './RecruitHeader.style';
import NavBar from '../common/Bar/NavBar';

const RecruitHeader = () => {
  return (
    <S.CustomHeader>
      <S.CustomContainer>
        <NavBar />
      </S.CustomContainer>
    </S.CustomHeader>
  );
};

export default RecruitHeader;
