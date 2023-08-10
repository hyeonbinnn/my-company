import styled, { keyframes } from 'styled-components';
import earth from '../../assets/earth.png';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Header = styled.header`
  background-color: #f2e9d8;
  padding: 0px 20px;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 0 262px;
  /* background: url(${earth}) center right no-repeat; */

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    padding: 22px 0 0;
    height: 100vh;
    text-align: center;
    /* background-size: 250px;
    background-position: 50% 90%; */
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
