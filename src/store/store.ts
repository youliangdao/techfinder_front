import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './ducks/categorySlice';
import userReducer from './ducks/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
