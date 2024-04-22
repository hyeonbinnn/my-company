import React, { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { navigateTo, scrollToTop } from '../../utils/utils';
import * as S from './Home.style';
import useModal from '../../hooks/useModal';
import HomeHeader from '../../components/Header/HomeHeader';
import SocialBar from '../../components/Bar/SocialBar';
import SubscribeModal from '../../components/Modal/SubscribeModal';
import hands from '../../assets/hands.webp';
import astronaut from '../../assets/astronaut.jpeg';
import earthGirl from '../../assets/earthGirl.jpeg';
import animal from '../../assets/animal.jpeg';

const Home = () => {
  const navigate: NavigateFunction = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const { isModalOpen, openModal, closeModal } = useModal();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isValidEmail) {
      console.log('유효한 이메일 주소:', email);
      openModal();
      setEmail('');
    } else {
      alert('유효하지 않은 이메일 주소입니다.');
    }
  };

  const goToService = (): void => {
    navigateTo(navigate, '/service');
    scrollToTop();
  };

  return (
    <>
      <HomeHeader />
      <S.CustomMain>
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

          <S.Post>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              <br />
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="common-button" onClick={goToService}>
              Search More
            </button>
          </S.Post>
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
          <S.Form onSubmit={handleSubmit}>
            <label htmlFor="inpEmail" className="a11y-hidden">
              구독 이메일 입력창
            </label>
            <S.Input
              type="email"
              required
              placeholder="Enter your e-mail address"
              value={email}
              onChange={handleEmailChange}
              className={!isValidEmail ? 'invalid-email' : ''}
            />
            <S.Button type="submit" className="common-button">
              subscribe
            </S.Button>
          </S.Form>
        </S.Subscribe>
        {isModalOpen && <SubscribeModal onClose={closeModal} />}
      </S.CustomMain>
      <SocialBar />
    </>
  );
};

export default Home;
