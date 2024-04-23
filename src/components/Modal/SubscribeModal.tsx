import { BaseModalProps } from '../../types/common';
import BaseModal from './BaseModal';

const SubscribeModal = ({ onClose }: BaseModalProps) => {
  return (
    <BaseModal
      onClose={onClose}
      title="Thank You! ☺️"
      message="Your subscription has been received."
    />
  );
};

export default SubscribeModal;
