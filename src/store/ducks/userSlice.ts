import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../features/users/types';
import { RootState } from '../store';

type UserState = {
  avatar: string;
  description: string;
  nickname: string;
  uid: string;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { avatar: '', nickname: '', uid: '', description: '' },
  },
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = { avatar: '', nickname: '', uid: '', description: '' };
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

export const { login, logout, updateUserProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
