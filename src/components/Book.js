import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  /* eslint-disable no-console */
  console.log('Book prop:', book);
  /* eslint-enable no-console */

  if (!book) {
    return <div>Loading...</div>;
  }

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

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
