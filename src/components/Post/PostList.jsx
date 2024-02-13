import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TableWrap from './../Table/TableWrap';
import TableRow from './../Table/TableRow';
import TableColumn from './../Table/TableColumn';
import { getPost } from '../../api/post';
import { useRecoilValue, useRecoilState } from 'recoil';
import { deletedPostState, postsState } from '../../recoil/atoms';

const PostList = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const deletedPost = useRecoilValue(deletedPostState);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPost();
        const latestPosts = postsData.slice(0, 20);
        setPosts(latestPosts);
      } catch (error) {
        console.error('게시글을 불러오다 오류 발생', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <TableWrap headersName={['ID', 'Title']}>
        {posts
          .filter((post) => !deletedPost.includes(post.id))
          .map((post) => (
            <TableRow key={post.id}>
              <TableColumn>{post.id}</TableColumn>
              <TableColumn>
                <Link to={`/notice/${post.id}`}>{post.title}</Link>
              </TableColumn>
            </TableRow>
          ))}
      </TableWrap>
    </>
  );
};

export default PostList;
