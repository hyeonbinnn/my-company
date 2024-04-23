import { DeleteModalProps } from '../../types/common';
import * as S from './Modal.style';

const DeleteModal = ({ onClose, onConfirm }: DeleteModalProps) => {
  const handleConfirm = (): void => {
    onConfirm();
  };

  return (
    <S.ModalBg>
      <S.DeleteModal>
        <S.DeleteBox>
          <h2>삭제하시겠습니까?</h2>
          <S.ButtonBox>
            <S.Btn onClick={onClose}>
              <span>아니요</span>
            </S.Btn>
            <S.Btn onClick={handleConfirm}>
              <span>네</span>
            </S.Btn>
          </S.ButtonBox>
        </S.DeleteBox>
      </S.DeleteModal>
    </S.ModalBg>
  );
};

export default DeleteModal;
