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

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    display: ${(props) => (props.visible ? 'block' : 'none')};
    margin: 50px -40px 0 0;

    ul {
      flex-direction: column;
      gap: 20px;
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

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    display: block;
  }
`;
