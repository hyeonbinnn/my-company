import React from 'react';
import * as S from './ContactMain.style';
import contact from '../../assets/contact.png';
import MainLayout from '../common/Layout/MainLayout';

const ContactMain = () => {
  return (
    <S.CustomMain>
      <MainLayout
        icon={contact}
        iconTxt="연락망 아이콘"
        title="Contact"
        desc="찾아오시는 길"
      ></MainLayout>
      <S.Section1></S.Section1>
      <S.Section2></S.Section2>
    </S.CustomMain>
  );
};

export default ContactMain;
