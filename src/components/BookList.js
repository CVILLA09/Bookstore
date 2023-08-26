import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    { title: 'Sample Book 1', author: 'John Doe' },
    { title: 'Sample Book 2', author: 'Jane Doe' },
  ];

  return (
    <div>
      {books.map((book) => <Book key={book.title} book={book} />)}
    </div>
  );
};

export default BookList;
