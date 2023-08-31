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
      const appId = await createApp();
      if (appId) {
        const url = `/apps/${appId}/books`;
        api.get(url)
          .then((response) => {
            const fetchedBooks = Object.values(response.data).flat();
            dispatch(addBooksToStore(fetchedBooks));
          })
          .catch(() => {
            // Handle error
          });
      }
    };
    fetchBooks();
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (
        book ? <Book key={book.item_id} book={book} /> : null
      ))}
    </div>
  );
};

export default BookList;
