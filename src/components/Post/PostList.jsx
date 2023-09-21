import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import add from '../../assets/add.png';
import TableWrap from '../common/Table/TableWrap';
import TableRow from '../common/Table/TableRow';
import TableColumn from '../common/Table/TableColumn';
import PostModal from './PostModal';

const PostList = () => {
  const modalRef = useRef();
  const [selectedNum, setSelectedNum] = useState(null);
  const [boardData, setBoardData] = useState(() => {
    const num = localStorage.getItem('num') || 0;
    const initialData = [];

    for (let i = 1; i <= num; i++) {
      const boardItem = JSON.parse(localStorage.getItem(`board_${i}`));
      initialData.push(boardItem);
    }

    return initialData;
  });

  const [showModal, setShowModal] = useState(false);

  const openModal = (num) => {
    const selectedBoard = boardData.find((item) => item.num === num);
    if (selectedBoard) {
      setSelectedNum(num);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const increaseViews = (num) => {
    const updatedData = boardData.map((item) => {
      if (item.num === num) {
        const updatedViews = (item.views || 0) + 1;
        localStorage.setItem(`board_${num}`, JSON.stringify({ ...item, views: updatedViews }));
        return { ...item, views: updatedViews };
      }
      return item;
    });
    setBoardData(updatedData);
  };

  return (
    <>
      <TableWrap headersName={['Num', 'Name', 'Title', 'Date', 'Views']}>
        {boardData.map((item) => (
          <TableRow key={item.num}>
            <TableColumn>{item.num}</TableColumn>
            <TableColumn>{item.name}</TableColumn>
            <TableColumn>
              <span
                onClick={() => {
                  openModal(item.num);
                  increaseViews(item.num);
                }}
              >
                {item.title}
              </span>
            </TableColumn>
            <TableColumn>{item.date}</TableColumn>
            <TableColumn>{item.views !== undefined ? item.views : 0}</TableColumn>
          </TableRow>
        ))}
      </TableWrap>
      <Button>
        <Link to="/notice/post">
          <strong>게시글</strong> <img src={add} alt="게시글 추가 버튼 이미지" />
        </Link>
      </Button>
      {showModal && (
        <ModalBg onClick={handleModalClick}>
          <ModalContent ref={modalRef}>
            <PostModal boardData={boardData} selectedNum={selectedNum} />
          </ModalContent>
        </ModalBg>
      )}
    </>
  );
};

export default PostList;

const Button = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 7px 10px;
  margin-left: auto;

  strong {
    color: ${({ theme }) => theme.colors.white};
    margin-right: 1px;
  }

  img {
    width: 17px;
    padding-top: 1px;
  }
`;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ModalContent = styled.div`
  max-width: 80%;
  width: 800px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.third};
  border-radius: 20px;
  padding: 50px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    max-width: 70%;
    padding: 40px;
  }
`;
