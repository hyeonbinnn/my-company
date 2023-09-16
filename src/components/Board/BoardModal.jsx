import React from 'react';
import styled from 'styled-components';

const BoardModal = ({ boardData, selectedNum }) => {
  // 선택된 게시글 데이터 찾기 (일치하는 번호 기준)
  const selectedBoard = boardData.find((item) => item.num === selectedNum);

  // console.log('selectedNum:', selectedNum);
  // console.log('selectedBoard:', selectedBoard);

  if (!selectedBoard) {
    return <div>게시글을 찾을 수 없습니다 😭</div>;
  }

  return (
    <>
      <Header>
        <h2>Name : {selectedBoard.name}</h2>
        <h2>Title : {selectedBoard.title}</h2>
      </Header>
      <Content>
        <p>{selectedBoard.content}</p>
      </Content>
    </>
  );
};

export default BoardModal;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 20px 30px;

  h2 {
    font-size: 17px;
  }

  h2:nth-child(1) {
    margin-right: 90px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    flex-direction: column;
    gap: 30px;
    padding: 20px 30px;
    margin-bottom: 30px;

    h2 {
      font-size: 16px;
    }

    h2:nth-child(1) {
      margin-right: 0px;
    }
  }
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px;
  border-radius: 20px;
  height: 300px;

  p {
    font-weight: bold;
    font-size: 15px;
    white-space: pre-line;
    line-height: 1.6;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 30px;
  }
`;
