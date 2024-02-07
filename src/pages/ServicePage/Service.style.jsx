import styled from 'styled-components';
import { Main } from '../../components/Layout/MainLayout';

export const CustomMain = styled(Main)`
  padding: 0px 30px;
`;

export const Section = styled.section`
  padding-bottom: 80px;
  ul {
    display: grid;
    /* grid-template-columns: repeat(4, 288px); */
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    gap: 50px;
    margin: auto;
  }

  li {
    border-radius: 30px;
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
