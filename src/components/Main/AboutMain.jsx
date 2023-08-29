import React from 'react';
import * as S from './AboutMain.style';
import about from '../../assets/about.png';
import MainLayout from './../common/Layout/MainLayout';

const AboutMain = () => {
  return (
    <S.CustomMain>
      <MainLayout
        icon={about}
        iconTxt="회사소개 아이콘"
        title="About"
        desc="COMPANY는 지구의 평화를 위해, 세계인과 함께 합니다."
      >
        <S.Section1></S.Section1>
        <S.Section2></S.Section2>
      </MainLayout>
    </S.CustomMain>
  );
};

export default AboutMain;
