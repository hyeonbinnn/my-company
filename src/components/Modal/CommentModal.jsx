import React from 'react';
import BaseModal from './BaseModal';

const CommentModal = ({ onClose }) => {
  return (
    <BaseModal onClose={onClose} title="Success! ☺️" message="Your comment has been uploaded." />
  );
};

export default CommentModal;
