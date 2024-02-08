import React from 'react';
import * as S from './Modal.style';
import { useNavigate } from 'react-router-dom';
import close from '../../assets/close.png';
import { goToNotice } from './../../utils/utils';

const UploadModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleCloseAndNavigate = () => {
    onClose();
    goToNotice(navigate);
  };

  return (
    <S.ModalBg>
      <S.Modal>
        <S.Button onClick={handleCloseAndNavigate}>
          <S.Img src={close} alt="닫기 버튼 이미지" />
        </S.Button>
        <S.ContentBox>
          <h2>Success! ☺️</h2>
          <p>Your post has been uploaded.</p>
        </S.ContentBox>
      </S.Modal>
    </S.ModalBg>
  );
};

export default UploadModal;
