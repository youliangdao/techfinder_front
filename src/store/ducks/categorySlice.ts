import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type categoryState = {
  id: string;
  title: string;
  image: string;
  path: string;
};

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: {
      id: '',
      title: '',
      image: '',
      path: '',
    },
  },
  reducers: {
    setCategory: (state, action: PayloadAction<categoryState>) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export const selectCategory = (state: RootState) => state.category.category;

export default categorySlice.reducer;
