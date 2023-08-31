import styled from 'styled-components';
import { Main } from './../common/Layout/MainLayout';
import people1 from '../../assets/people1.jpg';
import people2 from '../../assets/people2.jpg';

export const CustomMain = styled(Main)`
  padding: 0px 30px;
`;

export const Section1 = styled.section`
  display: flex;
  gap: 50px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin: auto;

    h2 {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }

  div {
    img {
      width: 400px;
      border-radius: 30px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;

    ul {
      gap: 50px;

      h2 {
        font-size: 25px;
        margin-bottom: 15px;
      }
    }
  }
`;

export const Line = styled.div`
  display: block;
  width: 100%;
  height: 4px;
  background-color: #edeeef;
  margin: 90px auto;
`;

export const Section2 = styled.section`
  h2 {
    font-size: 30px;
    margin-bottom: 50px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    text-align: center;
    gap: 30px;

    li {
      width: 100%;
      max-width: 610px;
      height: 410px;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      border-radius: 30px;

      button {
        color: white;
        font-size: 17px;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 20px;
        border-radius: 30px;
        border: 1px solid #e0e0e0;
      }
    }
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    ul {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 50px;
    }
  }
`;

export const Li1 = styled.li`
  background: url(${people1}) center center no-repeat;
`;
export const Li2 = styled.li`
  background: url(${people2}) center right no-repeat;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    background: url(${people2}) center top no-repeat;
  }
`;

export const Section3 = styled.section`
  h2 {
    font-size: 30px;
    margin-bottom: 50px;
  }
`;
