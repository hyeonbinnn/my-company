import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './TopBar.style';
import companyLogo from '../../../assets/companyLogo.png';

const TopBar = () => {
  return (
    <S.Container>
      <S.H1>
        <Link to="#home">
          <img src={companyLogo} alt="회사 로고" />
        </Link>
      </S.H1>
      <S.Nav>
        <ul>
          <li>
            <Link to="#home">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#services">Services</Link>
          </li>
          <li>
            <Link tp="#contact">Contact</Link>
          </li>
          <li>
            <Link tp="#recruit">Recruit</Link>
          </li>
        </ul>
      </S.Nav>
      <S.Button type="button">
        <span className="a11y-hidden">네비게이션 열기</span>
      </S.Button>
    </S.Container>
  );
};

export default TopBar;
