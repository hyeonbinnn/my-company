import styled, { keyframes } from 'styled-components';
import earth from '../../assets/earth.png';
import { Header, Container } from '../common/Layout/HeaderLayout';

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
  padding: 20px 0 262px;

  @media ${'var(--mobile)'} {
    height: 80vh;
    padding: 20px 0 200px;
  }
`;

export const Earth = styled.div`
  width: 420px;
  height: 420px;
  background: url(${earth}) center right no-repeat;
  position: absolute;
  bottom: 30%;
  right: 10%;
  animation: ${rotateAnimation} 20s linear infinite;

  @media ${'var(--mobile)'} {
    background-size: 250px;
    background-position: center center;
    bottom: -5%;
    right: 50%;
    transform: translateX(50%);
    animation: none;
  }
`;

export const Section = styled.section`
  h2 {
    clear: both;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    position: relative;
  }

  p {
    max-width: 439px;
    margin: 40px 0;
  }

  @media ${'var(--mobile)'} {
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
      max-width: 280px;
      margin: 30px auto;
      font-size: 14px;
    }
  }
`;
