import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './NavBar.style';
import companyLogo from '../../../assets/companyLogo.png';

const NavBar = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <S.Container>
      <S.H1>
        <Link to="/">
          <img src={companyLogo} alt="회사 로고" />
        </Link>
      </S.H1>
      <S.Button type="button" onClick={toggleNav}>
        <span className="a11y-hidden">네비게이션 열기</span>
      </S.Button>
      <S.Nav visible={navVisible}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/recruit">Recruit</Link>
          </li>
        </ul>
      </S.Nav>
    </S.Container>
  );
};

export default NavBar;
