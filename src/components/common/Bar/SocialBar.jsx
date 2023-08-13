import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../../../assets/companyLogo.png';
import * as S from './SocialBar.style';

const SocialBar = () => {
  return (
    <S.Footer>
      <S.FooterBg />
      <S.FooterBox>
        <S.H2>
          <Link to="#home">
            <img src={companyLogo} alt="하단 배경" />
          </Link>
        </S.H2>
        <S.SocialLink>
          <li>
            <S.BlogLink
              href="https://section.blog.naver.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="a11y-hidden"> 블로그</span>
            </S.BlogLink>
          </li>
          <li>
            <S.InstaLink
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="a11y-hidden">인스타그램</span>
            </S.InstaLink>
          </li>
          <li>
            <S.FacebookLink
              href="https://ko-kr.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="a11y-hidden">페이스북</span>
            </S.FacebookLink>
          </li>
          <li>
            <S.YoutubeLink
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="a11y-hidden">유튜브</span>
            </S.YoutubeLink>
          </li>
        </S.SocialLink>
      </S.FooterBox>
    </S.Footer>
  );
};

export default SocialBar;
