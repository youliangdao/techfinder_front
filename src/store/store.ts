import { configureStore } from '@reduxjs/toolkit';

import articleReducer from './ducks/articleSlice';
import categoryReducer from './ducks/categorySlice';
import genreReducer from './ducks/genreSlice';
import userReducer from './ducks/userSlice';

export const store = configureStore({
  reducer: {
    article: articleReducer,
    category: categoryReducer,
    user: userReducer,
    genre: genreReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
