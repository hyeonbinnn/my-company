import { instance } from './../axios';

// 포스트 검색
export const getPost = async () => {
  try {
    const res = await instance.get('/posts');
    return res.data;
  } catch (error) {
    console.error('데이터 가져오기 실패', error);
    throw error;
  }
};

// 포스트 디테일
export const getDetailPost = async (id) => {
  try {
    const res = await instance.get(`/posts/${id}`);
    return res.data;
  } catch (error) {
    console.error('포스트 디테일 가져오기 실패', error);
    throw error;
  }
};

// 포스트 생성
export const createPost = async () => {
  try {
    const res = await instance.post('/posts');
    return res.data;
  } catch (error) {
    console.error('포스트 생성 실패', error);
    throw error;
  }
};

// 포스터 삭제
export const deletePost = async (id) => {
  try {
    const res = await instance.delete(`/posts/${id}`);
    return res.data;
  } catch (error) {
    console.error('포스트 삭제 실패', error);
    throw error;
  }
};
