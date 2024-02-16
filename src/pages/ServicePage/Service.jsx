import React from 'react';
import * as S from './Service.style';
import useModal from './../../hooks/useModal';
import servicesData from '../../data/servicesData';
import SocialBar from '../../components/Bar/SocialBar';
import MainLayout from '../../components/Layout/MainLayout';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import ComingSoonModal from './../../components/Modal/ComingSoonModal';
import service from '../../assets/service.png';

const Service = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <HeaderLayout />
      <S.CustomMain>
        <MainLayout
          icon={service}
          iconTxt="서비스 아이콘"
          title="Service"
          desc="지구를 지키는 마음으로, 한 걸음 더 나아갑니다."
        />
        <S.Section>
          <ul>
            {servicesData.map((service) => (
              <li key={service.id} onClick={openModal}>
                <img src={service.imgSrc} alt={service.title} loading="lazy" />
                <div>
                  <h3>{service.title}</h3>
                  <span>{service.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </S.Section>
      </S.CustomMain>
      <SocialBar />
      {isModalOpen && <ComingSoonModal onClose={closeModal} />}
    </>
  );
};

export default Service;
