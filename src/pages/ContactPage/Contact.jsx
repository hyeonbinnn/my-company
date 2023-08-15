import React from 'react';
import ContactHeader from '../../components/Header/ContactHeader';
import SocialBar from '../../components/common/Bar/SocialBar';
import ContactMain from './../../components/Main/ContactMain';

const Contact = () => {
  return (
    <>
      <ContactHeader />
      <ContactMain />
      <SocialBar />
    </>
  );
};

export default Contact;
