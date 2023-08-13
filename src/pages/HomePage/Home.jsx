import React from 'react';
import HomeHeader from '../../components/Header/HomeHeader';
import HomeMain from '../../components/Main/HomeMain';
import SocialBar from '../../components/common/Bar/SocialBar';
const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <SocialBar />
    </>
  );
};

export default Home;
