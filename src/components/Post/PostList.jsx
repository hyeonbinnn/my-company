import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TableWrap from './../Table/TableWrap';
import TableRow from './../Table/TableRow';
import TableColumn from './../Table/TableColumn';
import { getPost } from '../../api/post';
import { useRecoilState } from 'recoil';
import { deletedPostState } from '../../recoil/atom/atoms';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [deletedPost] = useRecoilState(deletedPostState);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await getPost();
      const latestPosts = postsData.slice(0, 20);
      setPosts(latestPosts);
    } catch (error) {
      console.log('게시글을 불러오다 오류 발생', error);
    }
  };

  return (
    <>
      <TableWrap headersName={['ID', 'Title', 'Date', 'Views']}>
        {posts
          .filter((post) => !deletedPost.includes(post.id))
          .map((post) => (
            <TableRow key={post.id}>
              <TableColumn>{post.id}</TableColumn>
              <TableColumn>
                <Link to={`/notice/${post.id}`}>{post.title}</Link>
              </TableColumn>
              <TableColumn></TableColumn>
              <TableColumn></TableColumn>
            </TableRow>
          ))}
      </TableWrap>
      <Link to="/notice/upload">
        <CreateBtn>게시글 작성</CreateBtn>
      </Link>
    </>
  );
};

export default PostList;

const CreateBtn = styled.button`
  float: right;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  border-radius: 10px;
  padding: 10px;
`;
