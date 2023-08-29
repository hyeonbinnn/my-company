import styled from 'styled-components';
import mail from '../../assets/mail.png';
import { Main } from './../common/Layout/MainLayout';

export const CustomMain = styled(Main)`
  margin: 80px auto 0;
`;

export const Section1 = styled.section``;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  gap: 110px;

  img {
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }

  figcaption {
    h2 {
      margin-bottom: 30px;
      font-weight: 700;
      font-size: 36px;
      line-height: 45px;
    }
    p {
      font-size: 14px;
      line-height: 18px;
    }
  }

  @media ${'var(--mobile)'} {
    flex-direction: column;
    gap: 40px;

    img {
      max-width: 326px;
    }

    figcaption {
      text-align: center;
      h2 {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 20px;
      }
    }
  }
`;

export const Section2 = styled.section`
  margin: 120px 0 90px;

  h2 {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    color: #d97652;
    text-align: center;
  }

  p {
    text-align: center;

    strong {
      color: #d97652;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: 88px 0 90px;

    button {
      overflow: hidden;
      box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      cursor: pointer;
    }
  }

  @media ${'var(--mobile)'} {
    margin: 60px 0 50px;

    h2 {
      font-size: 24px;
      line-height: 30px;
    }

    br {
      display: none;
    }

    ul {
      overflow: scroll;
      padding-bottom: 20px;
      margin: 40px -20px 60px 0;
      -webkit-overflow-scrolling: touch;
      li {
        flex-shrink: 0;
      }
    }

    button {
      max-width: 260px;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const Post = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media ${'var(--mobile)'} {
    flex-direction: column;

    p {
      max-width: 740px;
      text-align: left;
    }

    button {
      align-self: flex-end;
    }
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

  @media ${'var(--mobile)'} {
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

    @media ${'var(--mobile)'} {
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

    @media ${'var(--mobile)'} {
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

  &:focus-visible {
    outline: 2px solid lightblue;
    outline-offset: 3px;
  }

  @media ${'var(--mobile)'} {
    padding: 12px 48px;
    font-size: 12px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);

  @media ${'var(--mobile)'} {
    position: static;
    transform: none;
    float: right;
    margin-top: 20px;
  }
`;
