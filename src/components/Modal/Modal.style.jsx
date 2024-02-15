import styled from 'styled-components';

export const ModalBg = styled.div`
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

// UploadModal, SubscribeModal, CommentMOdal
export const Modal = styled.div`
  position: relative;
  width: 350px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 10px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 40px;

  h2 {
    margin: 50px 0 20px;
  }
`;

// DeleteModal
export const DeleteModal = styled(Modal)`
  overflow: hidden;
  padding: 0px;
`;

export const DeleteBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    margin: 40px 0px 35px;
    color: ${({ theme }) => theme.colors.black};
    font-size: 17px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  border-top: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
`;

export const Btn = styled.button`
  display: flex;
  justify-delete: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 15px;
  font-weight: bold;

  &:first-of-type {
    border-right: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  &:last-of-type {
    color: ${({ theme }) => theme.colors.secondary};
  }

  span {
    position: block;
    margin: 0 auto;
  }
`;

// CeoModal
export const CeoModal = styled(Modal)`
  width: 800px;
  max-width: 90%;
  height: 85%;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    max-width: 80%;
  }
`;

export const CloseBox = styled.div`
  margin-bottom: 20px;
`;

export const Section = styled.section`
  text-align: center;

  img {
    max-width: 100%;
    width: 550px;
    margin: 30px auto 50px;
  }

  h2 {
    margin-bottom: 15px;
  }

  span {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 40px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    img {
      width: 380px;
    }
  }
`;
