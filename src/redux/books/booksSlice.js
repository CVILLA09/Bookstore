
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addBookAPI, removeBookAPI } from '../../api/bookstoreAPI';

// Initial state
const initialState = [];

// Fetch App ID from .env file
const appId = process.env.REACT_APP_BOOKSTORE_APP_ID;

// Create an async thunk for adding a book
export const addBookAsync = createAsyncThunk(
  'books/addBook',
  async (book) => {
    const addedBook = await addBookAPI(appId, book);
    return addedBook;
  }
);

// Create an async thunk for removing a book
export const removeBookAsync = createAsyncThunk(
  'books/removeBook',
  async (itemId) => {
    const removed = await removeBookAPI(appId, itemId);
    return removed;
  }
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooksToStore: (state, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        const index = state.findIndex((book) => book.item_id === action.payload.item_id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      });
  },
});

export const { addBooksToStore } = booksSlice.actions;

export default booksSlice.reducer;
