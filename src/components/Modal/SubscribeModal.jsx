import React from 'react';
import BaseModal from './BaseModal';

const SubscribeModal = ({ onClose }) => {
  return (
    <BaseModal
      onClose={onClose}
      title="Thank You! ☺️"
      message="Your subscription has been received."
    />
  );
};

export default SubscribeModal;
