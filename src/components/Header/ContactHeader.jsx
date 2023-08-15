import React from 'react';
import * as S from './ContactHeader.style';
import NavBar from '../common/Bar/NavBar';

const ContactHeader = () => {
  return (
    <S.Header>
      <S.Container>
        <NavBar />
      </S.Container>
    </S.Header>
  );
};

export default ContactHeader;
