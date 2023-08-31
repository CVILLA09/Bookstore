import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../api/bookstoreAPI'; // Import the Axios instance
import Book from './Book';
import { addBooksToStore } from '../redux/books/booksSlice'; // Import the new action creator

const BookList = () => {
  // Use useSelector to get books from Redux store
  const books = useSelector((state) => state.books);
  
  // Use useDispatch to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Use useEffect to fetch books from the API when the component mounts
  useEffect(() => {
    api.get('/apps/:app_id/books')
      .then((response) => {
        const fetchedBooks = Object.values(response.data); // Assuming the data is an object with book IDs as keys
        dispatch(addBooksToStore(fetchedBooks)); // Dispatch the new action to add books to the Redux store
      })
      .catch((error) => {
        console.error('There was an error fetching books:', error);
      });
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} /> // Changed 'key' to use 'item_id'
      ))}
    </div>
  );
};

export default BookList;
