import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const loginModalSlice = createSlice({
  name: 'category',
  initialState: {
    isLoginOpened: false,
  },
  reducers: {
    openLoginModal: (state) => {
      state.isLoginOpened = true;
    },
    closeLoginModal: (state) => {
      state.isLoginOpened = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = loginModalSlice.actions;

export const selectIsLoginOpened = (state: RootState) =>
  state.isLoginOpened.isLoginOpened;

export default loginModalSlice.reducer;
