import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addBookAPI, removeBookAPI, fetchBooksAPI } from '../../api/bookstoreAPI';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'BZ0QGrAujAzZHCoi1o4f';

// Initial state
const initialState = [];

// Create an async thunk for adding a book
export const addBookAsync = createAsyncThunk(
  'books/addBook',
  async (book) => {
    const addedBook = await addBookAPI(appId, book);
    return addedBook;
  },
);

// Create an async thunk for removing a book
export const removeBookAsync = createAsyncThunk(
  'books/removeBook',
  async (itemId) => {
    const removed = await removeBookAPI(appId, itemId);
    return removed;
  },
);

// Create an async thunk to fetch books from the API
export const fetchBooksAsync = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const fetchedBooks = await fetchBooksAPI(API_URL, appId); // Pass both API_URL and appId
    return fetchedBooks;
  },
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
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => action.payload);
  },
});

export const { addBooksToStore } = booksSlice.actions;

export default booksSlice.reducer;
