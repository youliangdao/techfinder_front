import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type LikeIds = {
  likeIds: string[] | [];
};

export const likeSlice = createSlice({
  name: 'like',
  initialState: {
    likeIds: [''],
  },
  reducers: {
    setLikeIds: (state, action: PayloadAction<LikeIds>) => {
      state.likeIds = action.payload.likeIds;
    },
    addLikeIds: (state, action: PayloadAction<string>) => {
      state.likeIds.push(action.payload);
    },
    deleteLikeIds: (state, action: PayloadAction<string>) => {
      const newLikeIds = state.likeIds.filter(
        (likeId) => likeId !== action.payload
      );
      state.likeIds = newLikeIds;
    },
  },
});

export const { setLikeIds, addLikeIds, deleteLikeIds } = likeSlice.actions;

export const selectLikeIds = (state: RootState) => state.likeIds.likeIds;

export default likeSlice.reducer;
