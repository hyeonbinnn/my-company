import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import About from '../pages/AboutPage/About';
import Ceo from '../pages/AboutPage/Ceo';
import Services from '../pages/ServicesPage/Services';
import ServiceDetail from '../pages/ServicesPage/ServiceDetail';
import Contact from '../pages/ContactPage/Contact';
import Notice from '../pages/NoticePage/Notice';
import Post from '../pages/NoticePage/Post';
import Error404 from '../pages/ErrorPage/Error404';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/ceo" element={<Ceo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/detail" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/post" element={<Post />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/error" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
