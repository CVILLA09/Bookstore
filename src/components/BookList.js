import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  // Use useSelector to get books from Redux store
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
