// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { Category } from '../../features/categories/types';
// import { RootState } from '../store';

// const initialState: Pick<Category, 'Icon' | 'title'> = {
//   title: '',
//   Icon: null,
// };

// export const categorySlice = createSlice({
//   name: 'category',
//   initialState,
//   reducers: {
//     setCategory: (state, action: PayloadAction<Category>) => {
//       state = action.payload;
//     },
//   },
// });

// export const { setCategory } = categorySlice.actions;

// export const selectCategory = (state: RootState) => state.category;

// export default categorySlice.reducer;
