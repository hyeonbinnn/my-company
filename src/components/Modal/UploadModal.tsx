import BaseModal from './BaseModal';
import { useNavigate } from 'react-router-dom';
import { navigateTo, scrollToTop } from '../../utils/utils';
import { BaseModalProps } from '../../types/common';

const UploadModal = ({ onClose }: BaseModalProps) => {
  const navigate = useNavigate();

  const handleCloseAndNavigate = (): void => {
    onClose();
    navigateTo(navigate, '/notice');
    scrollToTop();
  };

  return (
    <BaseModal
      onClose={handleCloseAndNavigate}
      title="Success! ☺️"
      message="Your post has been uploaded."
    />
  );
};

export default UploadModal;
