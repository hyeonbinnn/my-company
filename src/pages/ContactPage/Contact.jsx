import React from 'react';
import * as S from './Contact.style';
import SocialBar from '../../components/Bar/SocialBar';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import contact from '../../assets/contact.png';
import MainLayout from '../../components/Layout/MainLayout';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Contact = () => {
  const center = {
    lat: 37.566535,
    lng: 126.9779692,
  };

  return (
    <>
      <HeaderLayout />
      <S.CustomMain>
        <MainLayout
          icon={contact}
          iconTxt="연락망 아이콘"
          title="Contact"
          desc="찾아오시는 길"
        ></MainLayout>
        <S.Section1>
          <h2 className="a11y-hidden">찾아오시는 길 Map 지도</h2>
          <Map
            // 지도 표시
            center={center}
            style={{
              // 지도의 크기
              width: '100%',
              height: 'calc(100vh - 450px)',
              marginTop: '-20px',
            }}
            level={3} // 지도의 확대 레벨
          >
            <MapMarker position={center}>
              <div style={{ color: '#000', marginLeft: '45px' }}>Company</div>
            </MapMarker>
          </Map>
        </S.Section1>
        <S.Section2>
          <h3 className="a11y-hidden">회사 정보 카드</h3>
          <S.Inform>
            <ul>
              <li>
                <strong>주소</strong>
                <span>|</span>서울특별시 가나구 다라동 마바내로 7 사아자빌딩 2층
              </li>
              <li>
                <strong>TEL</strong>
                <span>|</span>02-1234-6789 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>FAX</strong>
                <span>|</span>02-1234-6780
              </li>
              <li>
                <strong>버스</strong>
                <span>|</span>가나역 : 12, 34, 123, 789, 345
              </li>
              <li>
                <strong>지하철</strong>
                <span>|</span>가나구청역 7번 출구
              </li>
            </ul>
          </S.Inform>
        </S.Section2>
      </S.CustomMain>
      <SocialBar />
    </>
  );
};

export default Contact;
