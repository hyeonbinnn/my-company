import styled, { keyframes } from 'styled-components';
import { Header, Container } from '../Layout/HeaderLayout';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CustomHeader = styled(Header)`
  background-color: #f2e9d8;
`;

export const CustomContainer = styled(Container)`
  position: relative;
  padding-bottom: 270px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    height: 80vh;
    padding-bottom: 190px;
  }
`;

export const Section = styled.section`
  h2 {
    clear: both;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    position: relative;
    z-index: 2;
  }

  p {
    max-width: 550px;
    margin: 40px 0;
    line-height: 2;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);

    h2 {
      font-size: 24px;
      line-height: 30px;
      padding-top: 30px;
    }

    p {
      max-width: 300px;
      margin: 30px auto;
      font-size: 14px;
      line-height: 1.5;
    }
  }
`;

export const Earth = styled.div`
  position: absolute;
  bottom: 26%;
  left: 87%;
  transform: translateX(-50%);
  text-align: right;

  img {
    width: 400px;
    animation: ${rotateAnimation} 20s linear infinite;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    text-align: center;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);

    img {
      width: 250px;
    }
  }
`;
