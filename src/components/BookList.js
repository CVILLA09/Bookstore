import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { fetchBooksAsync, removeBookAsync } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();

  // Fetch books from the API when the component mounts
  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  // Use useSelector to get books and status from Redux store
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);

  // Function to handle book removal
  const handleRemoveBook = (id) => {
    dispatch(removeBookAsync(id));
  };

  // Loading and error states
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error loading books</p>;

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} onRemove={handleRemoveBook} />
      ))}
    </div>
  );
};

export default BookList;
