export interface MainLayoutProps {
  icon: string;
  iconTxt: string;
  title: string;
  desc: string;
}

export interface BaseModalProps {
  title?: string;
  message?: string;
  onClose: () => void;
}

export interface DeleteModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export interface ErrorProps {
  title?: string;
  content: string;
  nextContent: string;
}

export interface ModalState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
