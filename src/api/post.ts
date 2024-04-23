import { axiosInstance } from '../axios';
import { useQuery, useMutation } from 'react-query';
import { Comment, Post } from '../types/data';

// 게시글 목록 가져오기
export const useGetPost = () => {
  return useQuery<Post[]>('posts', async () => {
    const res = await axiosInstance.get<Post[]>('/posts');
    return res.data;
  });
};

// 게시글 상세 가져오기
export const useGetDetailPost = (id: number) => {
  return useQuery<Post>(['post', id], async () => {
    const res = await axiosInstance.get<Post>(`/posts/${id}`);
    return res.data;
  });
};

// 게시글 생성
export const useCreatePost = () => {
  return useMutation<Post, unknown, Post, unknown>(async (newPost: Post) => {
    const res = await axiosInstance.post<Post>('/posts', newPost);
    return res.data;
  });
};

// 게시글 삭제
export const useDeletePost = () => {
  return useMutation<void, unknown, number, unknown>(async (id: number) => {
    const res = await axiosInstance.delete(`/posts/${id}`);
    return res.data;
  });
};

// 게시글 상세 댓글 가져오기
export const useGetComment = (id: number) => {
  return useQuery<Comment[]>(['comments', id], async () => {
    const res = await axiosInstance.get<Comment[]>(`/posts/${id}/comments`);
    return res.data;
  });
};
