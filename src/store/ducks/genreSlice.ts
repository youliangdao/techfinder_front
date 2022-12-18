import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

const GENRE = {
  ALL: 'all',
  TREND: 'trend',
  LIKES: 'likes',
  BOOKMARKS: 'bookmarks',
} as const;

type GENRE = typeof GENRE[keyof typeof GENRE];

const initialState = '';

export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<GENRE>) => {
      state = action.payload;
    },
  },
});

export const { setGenre } = genreSlice.actions;

export const selectGenre = (state: RootState) => state.genre;

export default genreSlice.reducer;
