import styled from 'styled-components';
import menu from '../../../assets/menu.svg';

export const Container = styled.header``;

export const H1 = styled.h1`
  width: 150px;
  float: left;
  margin: 0;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 130px;
  }
`;

export const Nav = styled.nav`
  float: right;
  margin-top: 20px;
  margin-bottom: 226px;

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

  @media ${(props) => props.theme.mediaQuery.mobile} {
    display: ${(props) => (props.visible ? 'block' : 'none')};
    margin: 45px -40px 0 0;

    ul {
      flex-direction: column;
      gap: 16px;
    }

    li {
      font-size: 17px;
    }
  }
`;

export const Button = styled.button`
  display: none;
  float: right;
  width: 32px;
  height: 32px;
  background-image: url(${menu});
  background-color: transparent;
  cursor: pointer;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    display: block;
  }
`;
