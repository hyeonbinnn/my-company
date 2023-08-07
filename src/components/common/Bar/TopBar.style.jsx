import styled from 'styled-components';
import menu from '../../../assets/menu.svg';

export const Container = styled.header``;

export const H1 = styled.h1`
  width: 150px;
  float: left;
  margin: 0;
`;

export const Nav = styled.nav`
  float: right;
  margin-top: 20px;
  margin-bottom: 226px;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  li {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.txtColor};
  }
`;

export const Button = styled.button`
  display: none;
  float: right;
  width: 32px;
  height: 32px;
  margin-bottom: 62px;
  background-image: url(${menu});
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    display: block;
  }
`;
