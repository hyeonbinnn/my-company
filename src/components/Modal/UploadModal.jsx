import React from 'react';
import BaseModal from './BaseModal';
import { useNavigate } from 'react-router-dom';
import { navigateTo, scrollToTop } from './../../utils/utils';

const UploadModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleCloseAndNavigate = () => {
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
