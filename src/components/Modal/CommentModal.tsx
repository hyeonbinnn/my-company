import { BaseModalProps } from '../../types/common';
import BaseModal from './BaseModal';

const CommentModal = ({ onClose }: BaseModalProps) => {
  return (
    <BaseModal onClose={onClose} title="Success! ☺️" message="Your comment has been uploaded." />
  );
};

export default CommentModal;
