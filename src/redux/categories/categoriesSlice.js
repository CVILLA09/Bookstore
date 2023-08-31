import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = [];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
