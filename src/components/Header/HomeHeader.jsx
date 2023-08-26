import React from 'react';
import NavBar from '../common/Bar/NavBar';
import * as S from './HomeHeader.style';

const HomeHeader = () => {
  return (
    <S.CustomHeader>
      <S.CustomContainer>
        <NavBar />
        <S.Earth />
        <S.Section>
          <h2>
            Lorem Ipsum is simply
            <br />
            dummy text of the printing and
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br />
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown
          </p>
        </S.Section>
      </S.CustomContainer>
    </S.CustomHeader>
  );
};

export default HomeHeader;
