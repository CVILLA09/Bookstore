import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  if (!book) {
    return <div>Loading...</div>;
  }

  const dispatch = useDispatch();

  const deleteBook = () => {
    dispatch(removeBook({ item_id: book.item_id }));
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
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
