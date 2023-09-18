import React from 'react';
import styled from 'styled-components';
import HeaderLayout from '../../components/common/Layout/HeaderLayout';
import SocialBar from '../../components/common/Bar/SocialBar';
import BoardPostForm from '../../components/Board/BoardPostForm';
import { Main } from '../../components/common/Layout/MainLayout';
import board from '../../assets/board.png';
import MainLayout from '../../components/common/Layout/MainLayout';

export const CustomMain = styled(Main)`
  padding: 0px 30px;
`;

const Board = () => {
  return (
    <>
      <HeaderLayout />
      <CustomMain>
        <MainLayout
          icon={board}
          iconTxt="게시글 작성 아이콘"
          title="Board"
          desc="게시글 작성"
        ></MainLayout>
        <BoardPostForm />
      </CustomMain>
      <SocialBar />
    </>
  );
};

export default Board;
