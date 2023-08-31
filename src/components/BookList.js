import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../api/bookstoreAPI';
import Book from './Book';
import { addBooksToStore } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  // Fetch App ID from .env file
  const appId = process.env.REACT_APP_BOOKSTORE_APP_ID;

  useEffect(() => {
    const fetchBooks = async () => {
      const url = `/apps/${appId}/books`;
      try {
        const response = await api.get(url);
        const fetchedBooks = Object.values(response.data).flat();
        dispatch(addBooksToStore(fetchedBooks));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, [dispatch, appId]); // Added appId to the dependency array

  return (
    <div>
      {books.map((book) => (
        book ? <Book key={book.item_id} book={book} /> : null
      ))}
    </div>
  );
};

export default BookList;
