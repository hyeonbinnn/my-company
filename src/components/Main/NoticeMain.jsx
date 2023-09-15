import React from 'react';
import * as S from './NoticeMain.style';
import notice from '../../assets/notice.png';
import MainLayout from '../common/Layout/MainLayout';
import BoardList from '../Board/BoardList';

const NoticeMain = () => {
  return (
    <S.CustomMain>
      <MainLayout
        icon={notice}
        iconTxt="공지 아이콘"
        title="Notice"
        desc="공지 게시판"
      ></MainLayout>
      <S.Section>
        <h1 className="a11y-hidden">공지 게시판</h1>
        <BoardList />
      </S.Section>
    </S.CustomMain>
  );
};

export default NoticeMain;
