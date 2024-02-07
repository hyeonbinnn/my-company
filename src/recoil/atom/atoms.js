import { atom } from 'recoil';

export const deletedPostState = atom({
  key: 'deletePostState',
  default: [],
});

export const createdPostState = atom({
  key: 'createPostState',
  default: [],
});

export const loadingState = atom({
  key: 'loadingState',
  default: false,
});
