import React from 'react';
import * as S from './Modal.style';
import CloseButton from '../Button/CloseButton';
import { BaseModalProps } from '../../types/common';

const BaseModal = ({ onClose, title, message }: BaseModalProps) => {
  return (
    <S.ModalBg>
      <S.Modal>
        <CloseButton onClose={onClose} />
        <S.ContentBox>
          <h2>{title}</h2>
          <p>{message}</p>
        </S.ContentBox>
      </S.Modal>
    </S.ModalBg>
  );
};

export default BaseModal;
