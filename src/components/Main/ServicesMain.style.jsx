import styled from 'styled-components';
import { Main } from './../common/Layout/MainLayout';

export const CustomMain = styled(Main)`
  margin: 30px auto;
  padding: 0px;
`;

export const Article = styled.article`
  padding: 30px;
`;

export const H2 = styled.h2`
  img {
    width: 45px;
    height: 45px;
  }

  strong {
    font-size: 40px;
    line-height: 40px;
    padding-left: 15px;
  }

  span {
    display: block;
    margin: 30px 0;
    font-size: 25px;
  }

  @media ${'var(--mobile)'} {
    img {
      width: 35px;
      height: 35px;
    }
    strong {
      font-size: 30px;
      line-height: 30px;
      padding-left: 10px;
    }
    span {
      font-size: 20px;
    }
  }
`;

export const Section = styled.section`
  padding: 40px 0px;
  ul {
    display: grid;
    /* grid-template-columns: repeat(4, 288px); */
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    gap: 50px;
    margin: auto;
  }

  li {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.1);
    background: #fff;
  }

  img {
    width: 100%;
    aspect-ratio: 288/250;
    object-fit: cover;
    vertical-align: top;
  }

  div {
    padding: 20px;

    h3 {
      margin-bottom: 10px;
    }
  }
`;
