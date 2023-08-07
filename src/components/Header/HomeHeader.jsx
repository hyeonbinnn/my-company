import React from 'react';
import TopBar from '../common/Bar/TopBar';
import * as S from './HomeHeader.style';

const HomeHeader = () => {
  return (
    <S.Header>
      <S.Container>
        <TopBar />
        <S.H2>
          Lorem Ipsum is simply
          <br />
          dummy text of the printing and
        </S.H2>
        <S.P>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown
        </S.P>
      </S.Container>
    </S.Header>
  );
};

export default HomeHeader;
