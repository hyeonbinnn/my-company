import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../../assets/companyLogo.png';
import * as S from './Footer.style';

const Footer = () => {
  // const socialLinks = [
  //   { url: 'https://www.youtube.com/watch?v=your-video-id', label: '유튜브' },
  //   { url: 'https://ko-kr.facebook.com/', label: '페이스북' },
  //   { url: 'https://www.instagram.com/', label: '인스타그램' },
  //   {
  //     url: 'https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0',
  //     label: '블로그',
  //   },
  // ];

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
            <S.BlogLink href target="_blank" rel="noopener noreferrer">
              <span className="a11y-hidden"> 블로그</span>
            </S.BlogLink>
          </li>
          <li>
            <S.InstaLink href target="_blank" rel="noopener noreferrer">
              <span className="a11y-hidden">인스타그램</span>
            </S.InstaLink>
          </li>
          <li>
            <S.FacebookLink href target="_blank" rel="noopener noreferrer">
              <span className="a11y-hidden">페이스북</span>
            </S.FacebookLink>
          </li>
          <li>
            <S.YoutubeLink href target="_blank" rel="noopener noreferrer">
              <span className="a11y-hidden">유튜브</span>
            </S.YoutubeLink>
          </li>
        </S.SocialLink>
      </S.FooterBox>
    </S.Footer>
  );
};

export default Footer;
