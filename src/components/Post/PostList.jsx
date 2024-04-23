import React from 'react';
import { Link } from 'react-router-dom';
import { useGetPost } from '../../api/post';
import { useRecoilValue } from 'recoil';
import { deletedPostState } from '../../recoil/atoms';
import { Container, Text } from '../Loading/Loading';
import TableWrap from '../Table/TableWrap';
import TableRow from '../Table/TableRow';
import TableColumn from '../Table/TableColumn';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const PostList = () => {
  const { data: posts, isLoading, isError } = useGetPost();
  const deletedPost = useRecoilValue(deletedPostState);

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <Error
        content="게시글을 불러오는 중, 문제가 발생했습니다."
        nextContent="나중에 다시 시도해 주세요."
      />
    );

  if (!posts || posts.length === 0) {
    return (
      <Container>
        <Text>게시글 목록이 없습니다 🚫</Text>
      </Container>
    );
  }

  return (
    <>
      <TableWrap headersName={['ID', 'Title']}>
        {posts
          .filter((post) => !deletedPost.includes(post.id))
          .slice(0, 20)
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
