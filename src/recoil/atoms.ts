import { atom } from 'recoil';

export interface DeletePostState {
  deletedId: number[];
}

export const deletedPostState = atom<DeletePostState>({
  key: 'deletePostState',
  default: {
    deletedId: [],
  },
});

// export const createdPostState = atom({
//   key: 'createPostState',
//   default: [],
// });

// export const postsState = atom({
//   key: 'postsState',
//   default: [],
// });

// export const loadingState = atom({
//   key: 'loadingState',
//   default: false,
// });
