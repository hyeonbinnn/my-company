import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import Brand from '../pages/BrandPage/Brand';
import Sustainability from '../pages/SustainabilityPage/Sustainability';
import News from '../pages/NewsPage/News';
import Recruit from '../pages/RecruitPage/Recruit';
import Error404 from '../pages/ErrorPage/Error404';
import Splash from '../pages/SplashPage/Splash';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/notfound" element={<Error404 />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/news" element={<News />} />
        <Route path="/recruit" element={<Recruit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
