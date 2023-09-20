import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Home.style';
import HomeHeader from '../../components/Header/HomeHeader';
import SocialBar from '../../components/common/Bar/SocialBar';
import hands from '../../assets/hands.jpg';
import astronaut from '../../assets/astronaut.jpg';
import earthGirl from '../../assets/earthGirl.jpg';
import animal from '../../assets/animal.jpg';
import SubscribeModal from './../../components/Modal/SubscribeModal';

const Home = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 이메일 주소 유효성 검사 정규식
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // input 값이 변경될 때마다 호출돼, 유효성 검사를 하고 상태를 업데이트
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  // submit 버튼을 클릭하면 handleSubmit 함수가 호출돼 유효한 이메일 주소인지 확인하고 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      // 유효한 이메일 주소를 사용하여 구독 신청을 처리
      console.log('유효한 이메일 주소:', email);

      // 완료 모달 나타나기
      setIsModalOpen(true);

      // 입력창 초기화
      setEmail('');
    } else {
      alert('유효하지 않은 이메일 주소입니다.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            <button className="common-button">
              <Link to="/service">Search More</Link>
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
