import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import About from '../pages/AboutPage/About';
import Service from '../pages/ServicePage/Service';
import Contact from '../pages/ContactPage/Contact';
import Notice from '../pages/NoticePage/Notice';
import UploadPost from '../pages/NoticePage/UploadPost';
import Error404 from '../pages/ErrorPage/Error404';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/upload" element={<UploadPost />} />
        {/* <Route path="/notice/:post_id" " element={<Post />} /> */}
        <Route path="*" element={<Error404 />} />
        <Route path="/error" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
