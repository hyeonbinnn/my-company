import React from 'react';
import styled from 'styled-components';
import close from '../../assets/close.png';

const SubscribeModal = ({ onClose }) => {
  return (
    <ModalBg>
      <Modal>
        <button onClick={onClose}>
          <img src={close} alt="닫기 버튼 이미지" />
        </button>
        <div>
          <h2>Thank You! ☺️</h2>
          <p>Your subscription has been received.</p>
        </div>
      </Modal>
    </ModalBg>
  );
};

export default SubscribeModal;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Modal = styled.div`
  position: relative;
  width: 350px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 10px;

  button {
    float: right;
    img {
      width: 35px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 40px;

    h2 {
      margin: 50px 0 20px;
    }
  }
`;
