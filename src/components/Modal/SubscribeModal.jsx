import React from 'react';
import * as S from './Modal.style';
import close from '../../assets/close.png';

const SubscribeModal = ({ onClose }) => {
  return (
    <S.ModalBg>
      <S.Modal>
        <S.Button onClick={onClose}>
          <S.Img src={close} alt="닫기 버튼 이미지" />
        </S.Button>
        <S.ContentBox>
          <h2>Thank You! ☺️</h2>
          <p>Your subscription has been received.</p>
        </S.ContentBox>
      </S.Modal>
    </S.ModalBg>
  );
};

export default SubscribeModal;
