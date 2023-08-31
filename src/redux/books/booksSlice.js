import { createSlice } from '@reduxjs/toolkit';
import { addBookAPI, removeBookAPI } from '../../api/bookstoreAPI';

const initialState = [];

// Fetch App ID from .env file
const appId = process.env.REACT_APP_BOOKSTORE_APP_ID;

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooksToStore: (state, action) => action.payload,
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

// Create an async thunk for adding a book
export const addBookAsync = (book) => async (dispatch) => {
  const addedBook = await addBookAPI(appId, book);
  if (addedBook) {
    dispatch(addBook(addedBook));
  }
};

// Create an async thunk for removing a book
export const removeBookAsync = (itemId) => async (dispatch) => {
  const removed = await removeBookAPI(appId, itemId);
  if (removed) {
    dispatch(removeBook(itemId));
  }
};

export default booksSlice.reducer;
