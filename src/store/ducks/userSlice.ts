import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../features/users/types';
import { RootState } from '../store';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { avatar: '', nickname: '', uid: '' },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = { avatar: '', nickname: '', uid: '' };
    },
    updateUserProfile: (
      state,
      action: PayloadAction<Pick<User, 'avatar' | 'nickname'>>
    ) => {
      state.user.avatar = action.payload.avatar;
      state.user.nickname = action.payload.nickname;
    },
  },
});

export const { login, logout, updateUserProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
