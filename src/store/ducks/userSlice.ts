import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../features/users/types';
import { RootState } from '../store';

type UserState = {
  authChecked: boolean;
  avatar: string;
  description: string;
  nickname: string;
  uid: string;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      avatar: '',
      nickname: '',
      uid: '',
      description: '',
      authChecked: false,
    },
  },
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {
        avatar: '',
        nickname: '',
        uid: '',
        description: '',
        authChecked: true,
      };
    },
    checkAuth: (state, action: PayloadAction<boolean>) => {
      state.user.authChecked = action.payload;
    },
    updateUserProfile: (
      state,
      action: PayloadAction<Pick<User, 'nickname' | 'description' | 'avatar'>>
    ) => {
      state.user.nickname = action.payload.nickname;
      state.user.description = action.payload.description;
      state.user.avatar = action.payload.avatar;
    },
  },
});

export const { login, logout, checkAuth, updateUserProfile } =
  userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
