import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type BookmarkIds = {
  bookmarkIds: string[] | [];
};

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: {
    bookmarkIds: [''],
  },
  reducers: {
    setBookmarkIds: (state, action: PayloadAction<BookmarkIds>) => {
      state.bookmarkIds = action.payload.bookmarkIds;
    },
    addBookmarkIds: (state, action: PayloadAction<string>) => {
      state.bookmarkIds.push(action.payload);
    },
    deleteBookmarkIds: (state, action: PayloadAction<string>) => {
      const newBookmarkIds = state.bookmarkIds.filter(
        (bookmarkId) => bookmarkId !== action.payload
      );
      state.bookmarkIds = newBookmarkIds;
    },
  },
});

export const { setBookmarkIds, addBookmarkIds, deleteBookmarkIds } =
  bookmarkSlice.actions;

export const selectBookmarkIds = (state: RootState) =>
  state.bookmarkIds.bookmarkIds;

export default bookmarkSlice.reducer;
