export interface MainLayoutProps {
  icon: string;
  iconTxt: string;
  title: string;
  desc: string;
}

export interface ModalState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
