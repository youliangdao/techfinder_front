import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

type UserState = {
  apiChecked: boolean;
  authChecked: boolean;
  avatar: string;
  avatarKey: string;
  description: string;
  nickname: string;
  uid: string;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      avatar: '',
      avatarKey: '',
      nickname: '',
      uid: '',
      description: '',
      authChecked: false,
      apiChecked: false,
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
        avatarKey: '',
        authChecked: true,
        apiChecked: false,
      };
    },
    checkAuth: (state, action: PayloadAction<boolean>) => {
      state.user.authChecked = action.payload;
    },
    checkApi: (state, action: PayloadAction<boolean>) => {
      state.user.apiChecked = action.payload;
    },
    updateUserProfile: (
      state,
      action: PayloadAction<
        Pick<UserState, 'nickname' | 'description' | 'avatar' | 'avatarKey'>
      >
    ) => {
      state.user.nickname = action.payload.nickname;
      state.user.description = action.payload.description;
      state.user.avatar = action.payload.avatar;
      state.user.avatarKey = action.payload.avatarKey;
    },
  },
});

export const { login, logout, checkAuth, checkApi, updateUserProfile } =
  userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
