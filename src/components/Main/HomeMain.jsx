import React from 'react';
import { Link } from 'react-router-dom';
import hands from '../../assets/hands.jpg';
import * as S from './HomeMain.style';
import astronaut from '../../assets/astronaut.jpg';
import earthGirl from '../../assets/earthGirl.jpg';
import animal from '../../assets/animal.jpg';

const HomeMain = () => {
  return (
    <S.Main>
      <S.Section1>
        <S.Figure>
          <img src={hands} alt="지구를 담은 손" />
          <figcaption>
            <h2>Lorem Ipsum is simply dummy text of the printing and dummy text</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </figcaption>
        </S.Figure>
      </S.Section1>
      <S.Section2>
        <h2>dummy text of the printing and dummy</h2>
        <p>
          Lorem Ipsum is simply <strong>dummy text</strong> of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown
        </p>
        <ul>
          <li>
            <button type="button">
              <img src={astronaut} alt="지구를 여행하는 우주인" />
            </button>
          </li>
          <li>
            <button type="button">
              <img src={earthGirl} alt="우주를 삼키는 여자" />
            </button>
          </li>
          <li>
            <button type="button">
              <img src={animal} alt="수영하는 거북이" />
            </button>
          </li>
        </ul>

        <S.Services>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br />
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button className="common-button">
            <Link to="#services">Search More</Link>
          </button>
        </S.Services>
      </S.Section2>
      <S.Subscribe>
        <S.SubBox>
          <h3>Subscribe to our Company post</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br />
            Lorem Ipsum has been the industry's standard dummy text
          </p>
        </S.SubBox>
        <S.Form>
          <label for="inpEmail" class="a11y-hidden">
            구독 이메일 입력창
          </label>
          <S.Input type="email" required placeholder="Enter your e-mail address" />
          <S.Button type="submit" className="common-button">
            subscribe
          </S.Button>
        </S.Form>
      </S.Subscribe>
    </S.Main>
  );
};

export default HomeMain;
