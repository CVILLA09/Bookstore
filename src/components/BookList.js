import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api, { createApp } from '../api/bookstoreAPI';
import Book from './Book';
import { addBooksToStore } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBooks = async () => {
      // Check if the app ID already exists in local storage
      let appId = localStorage.getItem('appId');

      // If not, create a new app ID and store it in local storage
      if (!appId) {
        appId = await createApp();
        localStorage.setItem('appId', appId);
      }

      // Fetch books only if appId exists
      if (appId) {
        const url = `/apps/${appId}/books`;
        try {
          const response = await api.get(url);
          const fetchedBooks = Object.values(response.data);
          dispatch(addBooksToStore(fetchedBooks));
        } catch (error) {
          // Handle the error appropriately
        }
      }
    };
    fetchBooks();
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
