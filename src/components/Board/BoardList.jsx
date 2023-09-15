import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './BoardList.style';
import add from '../../assets/add.png';
import BoardModal from './BoardModal';

const BoardList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    // 새로운 게시글을 목록에 추가
    setPosts([...posts, newPost]);
  };

  const handleModalOpen = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedPost(null);
    setShowModal(false);
  };

  return (
    <>
      <S.Table>
        <S.Thead>
          <tr>
            <th>Num</th>
            <th>Name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Views</th>
          </tr>
        </S.Thead>
        <S.Tbody>
          {posts.map((post, index) => (
            <tr key={index} onClick={() => handleModalOpen(post)}>
              <td>{index + 1}</td>
              <td>{post.name}</td>
              <td>{post.title}</td>
              <td>{post.date}</td>
              <td>{post.views}</td>
            </tr>
          ))}
        </S.Tbody>
      </S.Table>
      <S.Button>
        <Link to="/board">
          <strong>게시글</strong> <img src={add} alt="게시글 추가 버튼 이미지" />
        </Link>
      </S.Button>

      {showModal && selectedPost && <BoardModal post={selectedPost} onClose={handleModalClose} />}
    </>
  );
};

export default BoardList;
