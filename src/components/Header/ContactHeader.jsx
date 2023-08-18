import React from 'react';
import * as S from './ContactHeader.style';
import NavBar from '../common/Bar/NavBar';

const ContactHeader = () => {
  return (
    <S.CustomHeader>
      <S.CustomContainer>
        <NavBar />
      </S.CustomContainer>
    </S.CustomHeader>
  );
};

export default ContactHeader;
