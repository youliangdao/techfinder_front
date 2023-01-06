import { configureStore } from '@reduxjs/toolkit';

import bookmarkReducer from './ducks/bookmarkSlice';
import categoryReducer from './ducks/categorySlice';
import likeReducer from './ducks/likeSlice';
import loginModalReducer from './ducks/loginModalSlice';
import userReducer from './ducks/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    isLoginOpened: loginModalReducer,
    bookmarkIds: bookmarkReducer,
    likeIds: likeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
