import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import companyMini from '../../assets/companyMini.png';

const Error404 = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goMain = () => {
    navigate('/');
  };

  return (
    <Main>
      <Container>
        <ErrorBox>
          <h2>Error 404</h2>
          <p>
            서비스 이용에 불편을 들 죄송합니다. <br />
            페이지를 찾을 수 없습니다.
          </p>
        </ErrorBox>
        <ErrorButton>
          <Btn1 onClick={goBack}>이전 페이지</Btn1>
          <Btn2 onClick={goMain}>메인 페이지</Btn2>
        </ErrorButton>
      </Container>
    </Main>
  );
};

export default Error404;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${companyMini});
  background-size: 100px;
  background-repeat: no-repeat;
  background-position: 50% 30%;
`;

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -55%);
`;

const ErrorBox = styled.div`
  h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const ErrorButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  button {
    width: 100px;
    height: 40px;
    border-radius: 15px;
  }
`;

const Btn1 = styled.button`
  border: ${({ theme }) => `3px solid ${theme.colors.secondary}`};
`;
const Btn2 = styled.button`
  border: ${({ theme }) => `3px solid ${theme.colors.primary}`};
`;
