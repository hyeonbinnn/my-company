import { axiosInstance } from './../axios';
import { useQuery, useMutation } from 'react-query';

// 게시글 목록 가져오기
export const useGetPost = () => {
  return useQuery('posts', async () => {
    const res = await axiosInstance.get('/posts');
    return res.data;
  });
};

// 게시글 상세 가져오기
export const useGetDetailPost = (id) => {
  return useQuery(['post, id'], async () => {
    const res = await axiosInstance.get(`/posts/${id}`);
    return res.data;
  });
};

// 게시글 생성
export const useCreatePost = () => {
  return useMutation(async () => {
    const res = await axiosInstance.post('/posts');
    return res.data;
  });
};

// 게시글 삭제
export const useDeletePost = () => {
  return useMutation(async (id) => {
    const res = await axiosInstance.delete(`/posts/${id}`);
    return res.data;
  });
};

// 게시글 상세 댓글 가져오기
export const useGetComment = (id) => {
  return useQuery(['comments', id], async () => {
    const res = await axiosInstance.get(`/posts/${id}/comments`);
    return res.data;
  });
};
