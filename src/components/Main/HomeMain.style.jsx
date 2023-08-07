import styled from 'styled-components';
import mail from '../../assets/mail.png';

export const Main = styled.main`
  position: relative;
  max-width: 1280px;
  margin: 80px auto 0;
  padding: 0 20px;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
  }
`;

export const Section1 = styled.section``;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  gap: 110px;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    flex-direction: column;
    gap: 40px;
  }

  img {
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);
    border-radius: 30px;

    @media screen and (min-width: 375px) and (max-width: 1000px) {
      max-width: 326px;
    }
  }

  figcaption {
    h2 {
      margin-bottom: 30px;
      font-weight: 700;
      font-size: 36px;
      line-height: 45px;

      @media screen and (min-width: 375px) and (max-width: 1000px) {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 20px;
      }
    }

    p {
      @media screen and (min-width: 375px) and (max-width: 1000px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;

export const Section2 = styled.section`
  margin: 120px 0 90px;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    margin: 60px 0 50px;
  }

  h2 {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    color: #d97652;
    text-align: center;

    @media screen and (min-width: 375px) and (max-width: 1000px) {
      font-size: 24px;
      line-height: 30px;
    }
  }

  p {
    text-align: center;

    strong {
      color: #d97652;
    }
  }

  br {
    @media screen and (min-width: 375px) and (max-width: 1000px) {
      display: none;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: 88px 0 90px;

    @media screen and (min-width: 375px) and (max-width: 1000px) {
      overflow: scroll;
      padding-bottom: 20px;
      margin: 40px -20px 60px 0;
      -webkit-overflow-scrolling: touch;
    }

    li {
      @media screen and (min-width: 375px) and (max-width: 1000px) {
        flex-shrink: 0;
      }
    }

    button {
      overflow: hidden;
      box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      cursor: pointer;

      @media screen and (min-width: 375px) and (max-width: 1000px) {
        max-width: 260px;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
      }
    }
  }
`;

export const Services = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 52px;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    flex-direction: column;
    align-items: end;
  }

  p {
    max-width: 740px;
    text-align: left;
  }
`;

export const Subscribe = styled.article`
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: 50px 58px;
  margin-bottom: -93px;
  gap: 143px;
  border-radius: 30px;
  background-color: #263140;
  color: #fff;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const SubBox = styled.div`
  h3 {
    margin-bottom: 18px;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;

    @media screen and (min-width: 375px) and (max-width: 1000px) {
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 30px;
    }
  }
`;

export const Form = styled.form`
  position: relative;
  flex-grow: 1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
    width: 24px;
    height: 24px;
    background-image: url(${mail});
    z-index: 1;

    @media screen and (min-width: 375px) and (max-width: 1000px) {
      width: 16px;
      height: 14px;
      left: 17px;
      top: 17px;
      background-size: cover;
    }
  }
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 20px 135px 20px 68px;
  overflow: hidden;
  border-radius: 60px;
  border: none;
  box-sizing: border-box;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    padding: 12px 48px;
    font-size: 12px;
  }

  &:focus-visible {
    outline: 2px solid lightblue;
    outline-offset: 3px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    position: static;
    transform: none;
    float: right;
    margin-top: 20px;
  }
`;
