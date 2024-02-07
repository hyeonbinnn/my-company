import { instance } from './../axios';

// 포스트 검색
export const getPost = async () => {
  const res = await instance.get('/posts');
  return res.data;
};

// 포스트 디테일
export const getDetailPost = async (id) => {
  const res = await instance.get(`/posts/${id}`);
  return res.data;
};

// 포스트 생성
export const createPost = async () => {
  const res = await instance.post('/posts');
  return res.data;
};

// 포스터 수정
export const putPost = async (id) => {
  const res = await instance.put(`/posts/${id}`);
  return res.data;
};

// 포스터 삭제
export const deletePost = async (id) => {
  const res = await instance.delete(`/posts/${id}`);
  return res.data;
};
