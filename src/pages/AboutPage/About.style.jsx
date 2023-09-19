import styled from 'styled-components';
import { Main } from '../../components/common/Layout/MainLayout';
import people1 from '../../assets/people1.jpg';
import people2 from '../../assets/people2.jpg';

export const CustomMain = styled(Main)`
  padding: 0px 30px;
`;

export const Section1 = styled.section`
  display: flex;
  position: relative;
  margin-bottom: 140px;
  gap: 50px;

  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background-color: #edeeef;
    position: absolute;
    bottom: -80px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin: auto;

    h2 {
      font-size: 35px;
      margin-bottom: 22px;
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
        font-size: 28px;
        margin-bottom: 17px;
      }
    }

    div {
      img {
        width: 350px;
      }
    }
  }
`;

export const Section2 = styled.section`
  position: relative;
  margin-bottom: 140px;

  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background-color: #edeeef;
    position: absolute;
    bottom: -80px;
  }

  h2 {
    font-size: 35px;
    margin-bottom: 50px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    text-align: center;
    gap: 30px;

    li {
      position: relative;
      width: 100%;
      max-width: 610px;
      height: 410px;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;

      ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
        border-radius: 30px;
      }

      button {
        color: white;
        font-size: 17px;
        padding: 20px;
        border-radius: 20px;
        z-index: 2;
        margin: auto;

        span,
        p {
          font-size: 20px;
          line-height: 30px;

          ::after {
            content: '>';
            margin-left: 10px;
          }
        }
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

    h2 {
      font-size: 28px;
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
  margin-bottom: 140px;

  h2 {
    font-size: 35px;
    margin-bottom: 30px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    h2 {
      font-size: 28px;
      margin-bottom: 40px;
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 50px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: auto;
`;

export const Title = styled.div`
  strong {
    display: block;
    font-size: 30px;
    margin-bottom: 20px;
  }

  p {
    font-size: 25px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    strong {
      font-size: 25px;
    }

    p {
      font-size: 20px;
    }
  }
`;

export const Desc = styled.div`
  p:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Color = styled.div`
  img {
    width: 300px;
    gap: 50px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    img {
      width: 250px;
    }
  }
`;
