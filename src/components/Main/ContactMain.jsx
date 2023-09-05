import React from 'react';
import * as S from './ContactMain.style';
import contact from '../../assets/contact.png';
import MainLayout from '../common/Layout/MainLayout';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const ContactMain = () => {
  const center = {
    lat: 33.450701,
    lng: 126.570667,
  };

  return (
    <S.CustomMain>
      <MainLayout
        icon={contact}
        iconTxt="연락망 아이콘"
        title="Contact"
        desc="찾아오시는 길"
      ></MainLayout>
      <S.Section1>
        <h2 className="a11y-hidden">찾아오시는 길 Map 지도</h2>
        <Map // 지도 표시
          center={center}
          style={{
            // 지도의 크기
            width: '100%',
            height: 'calc(100vh - 450px)',
            marginTop: '-20px',
          }}
          level={3} // 지도의 확대 레벨
        >
          <MapMarker position={center} />
        </Map>
      </S.Section1>
      <S.Section2>
        <h3 className="a11y-hidden">회사 정보 카드</h3>
      </S.Section2>
    </S.CustomMain>
  );
};

export default ContactMain;
