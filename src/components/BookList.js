import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api, { createApp } from '../api/bookstoreAPI'; // Import the Axios instance and createApp function
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
            const fetchedBooks = Object.values(response.data);
            dispatch(addBooksToStore(fetchedBooks));
          })
          .catch((error) => {
            console.error('There was an error fetching books:', error);
          });
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
