import React from 'react';
import * as S from './RecruitMain.style';
import recruit from '../../assets/recruit.png';
import MainLayout from '../common/Layout/MainLayout';

const RecruitMain = () => {
  return (
    <MainLayout
      icon={recruit}
      iconTxt="채용 모집 아이콘"
      title="Recruit"
      desc="콜미콜미 나를 채용해줘 모집모집"
    >
      <S.Section1></S.Section1>
      <S.Section2></S.Section2>
    </MainLayout>
  );
};

export default RecruitMain;
