import React from 'react';
import SocialBar from '../../components/common/Bar/SocialBar';
import ContactMain from './../../components/Main/ContactMain';
import HeaderLayout from '../../components/common/Layout/HeaderLayout';

const Contact = () => {
  return (
    <>
      <HeaderLayout />
      <ContactMain />
      <SocialBar />
    </>
  );
};

export default Contact;
