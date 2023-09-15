import React from 'react';
// import styled from 'styled-components';
import SocialBar from '../../components/common/Bar/SocialBar';
import BoardForm from '../../components/Board/BoardForm';
import HeaderLayout from '../../components/common/Layout/HeaderLayout';

const Board = () => {
  return (
    <>
      <HeaderLayout />
      <BoardForm />
      <SocialBar />
    </>
  );
};

export default Board;
