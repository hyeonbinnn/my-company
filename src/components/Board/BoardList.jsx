import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './BoardList.style';
import add from '../../assets/add.png';

const BoardList = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    // 새로운 게시글을 목록에 추가
    setPosts([...posts, newPost]);
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
            <tr key={index}>
              <td>{post.num}</td>
              <td>{post.name}</td>
              <td>{post.title}</td>
              <td>{post.date}</td>
              <td>{post.views}</td>
            </tr>
          ))}
          {/* <tr>
            <td>5</td>
            <td>관리자</td>
            <td>다섯번째 게시글입니다.</td>
            <td>2020-10-25</td>
            <td>4</td>
          </tr> */}
        </S.Tbody>
      </S.Table>
      <Link to="/board">
        <S.Button>
          <strong>게시글</strong> <img src={add} alt="게시글 추가 버튼 이미지" />
        </S.Button>
      </Link>
    </>
  );
};

export default BoardList;
