import { postInstance } from './../axios';

// 게시글 목록 가져오기
export const getPost = async () => {
  try {
    const res = await postInstance.get('/posts');
    return res.data;
  } catch (error) {
    console.error('데이터 가져오기 실패', error);
    throw error;
  }
};

// 게시글 상세 가져오기
export const getDetailPost = async (id) => {
  try {
    const res = await postInstance.get(`/posts/${id}`);
    return res.data;
  } catch (error) {
    console.error('포스트 디테일 가져오기 실패', error);
    throw error;
  }
};

// 게시글 생성
export const createPost = async () => {
  try {
    const res = await postInstance.post('/posts');
    return res.data;
  } catch (error) {
    console.error('포스트 생성 실패', error);
    throw error;
  }
};

// 게시글 삭제제
export const deletePost = async (id) => {
  try {
    const res = await postInstance.delete(`/posts/${id}`);
    return res.data;
  } catch (error) {
    console.error('포스트 삭제 실패', error);
    throw error;
  }
};

// 게시글 상세 댓글 가져오기
export const getComment = async (id) => {
  try {
    const res = await postInstance.get(`/posts/${id}/comments`);
    return res.data;
  } catch (error) {
    console.error('댓글 추가 중 에러 발생', error);
    throw error;
  }
};
