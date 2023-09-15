import React from 'react';
import styled from 'styled-components';
import HeaderLayout from '../../components/common/Layout/HeaderLayout';
import SocialBar from '../../components/common/Bar/SocialBar';
import BoardForm from '../../components/Board/BoardForm';
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
        <BoardForm />
      </CustomMain>
      <SocialBar />
    </>
  );
};

export default Board;
