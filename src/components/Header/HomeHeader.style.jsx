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

export const CustomHeader = styled(Header)``;

export const CustomContainer = styled(Container)`
  padding: 20px 0 262px;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    height: 80vh;
  }
`;

export const Earth = styled.div`
  width: 420px;
  height: 420px;
  background: url(${earth}) center right no-repeat;
  position: absolute;
  bottom: 30%;
  right: 13%;
  animation: ${rotateAnimation} 20s linear infinite;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    background-size: 250px;
    background-position: center center;
    bottom: -5%;
    right: 50%;
    transform: translateX(50%);
    animation: none;
  }
`;

export const H2 = styled.h2`
  clear: both;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  position: relative;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    font-size: 24px;
    line-height: 30px;
    padding-top: 60px;
  }
`;

export const P = styled.p`
  max-width: 439px;
  margin: 40px 0;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    max-width: 280px;
    margin: 30px auto;
    font-size: 14px;
  }
`;
