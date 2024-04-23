import { BaseModalProps } from '../../types/common';
import BaseModal from './BaseModal';

const ComingSoonModal = ({ onClose }: BaseModalProps) => {
  return <BaseModal onClose={onClose} title="COMING SOON ‼️" message="서비스 준비중입니다." />;
};

export default ComingSoonModal;
