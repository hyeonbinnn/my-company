import React from 'react';
import * as S from './NoticeMain.style';
import notice from '../../assets/notice.png';
import MainLayout from '../common/Layout/MainLayout';

const NoticeMain = () => {
  return (
    <S.CustomMain>
      <MainLayout
        icon={notice}
        iconTxt="채용 모집 아이콘"
        title="Notice"
        desc="공지 게시판"
      ></MainLayout>
      <S.Section1></S.Section1>
      <S.Section2></S.Section2>
    </S.CustomMain>
  );
};

export default NoticeMain;
