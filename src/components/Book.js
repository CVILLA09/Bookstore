import React, { useState } from 'react';

const Book = () => {
  const [book] = useState({ title: 'Sample Book', author: 'John Doe' });

  const deleteBook = () => {
    // Logic to delete the book
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button onClick={deleteBook} type="button">Delete</button>
    </div>
  );
};

export default Book;
