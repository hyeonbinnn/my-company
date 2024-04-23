import styled from 'styled-components';
import close from '../../assets/close.png';
import { CloseButtonProps } from '../../types/common';

const CloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <Button onClick={onClose}>
      <Img src={close} alt="닫기 버튼 이미지" />
    </Button>
  );
};

export default CloseButton;

const Button = styled.button`
  float: right;
`;

export const Img = styled.img`
  width: 35px;
`;
