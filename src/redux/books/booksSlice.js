import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooksToStore: (state, action) => {
      return action.payload;
    },
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const index = state.findIndex((book) => book.item_id === action.payload.item_id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addBooksToStore, addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
