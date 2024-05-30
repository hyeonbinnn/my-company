import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loading from '../components/Loading/Loading';

const Home = lazy(() => import('../pages/HomePage/Home'));
const About = lazy(() => import('../pages/AboutPage/About'));
const Service = lazy(() => import('../pages/ServicePage/Service'));
const Contact = lazy(() => import('../pages/ContactPage/Contact'));
const Notice = lazy(() => import('../pages/NoticePage/Notice'));
const UploadPost = lazy(() => import('../pages/NoticePage/UploadPost'));
const Error404 = lazy(() => import('../pages/ErrorPage/Error404'));
const PostDetail = lazy(() => import('../pages/NoticePage/PostDetail'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/upload" element={<UploadPost />} />
          <Route path="/notice/:id" element={<PostDetail />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/error" element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
