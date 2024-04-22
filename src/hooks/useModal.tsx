import { useState } from 'react';
import { ModalState } from '../types/common';

const useModal = (): ModalState => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
