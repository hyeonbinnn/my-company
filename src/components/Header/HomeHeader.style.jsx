import styled from 'styled-components';
import earth from '../../assets/earth.png';

export const Header = styled.header`
  background-color: #f2e9d8;
  padding: 0px 20px;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 0 262px;
  background: url(${earth}) center right no-repeat;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    padding: 22px 0 0;
    height: 90vh;
    text-align: center;
    background-size: 250px;
    background-position: bottom center;
  }
`;

export const H2 = styled.h2`
  clear: both;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    font-size: 24px;
    line-height: 30px;
    padding-top: 50px;
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