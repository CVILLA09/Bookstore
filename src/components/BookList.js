import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchBooksAsync } from '../redux/books/booksSlice';
import BookDetails from './BookDetails';
import FormAddBook from './FormAddBook';
import '../styles/bookList.css';

const BookList = () => {
  const idRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  const { books } = useSelector((state) => state.books);
  const status = useSelector((state) => state.books.status);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error loading books</p>;

  return (
    <main>
      <section className="book-container">
        {Object.entries(books).map(([id, bookArray]) => {
          const book = bookArray[0];
          idRef.current = id;

          return (
            <BookDetails
              id={idRef.current}
              key={idRef.current}
              title={book.title}
              author={book.author}
              category={book.category}
              chapter={book.chapter}
              percentage={book.percentage}
            />
          );
        })}
      </section>
      <span className="form-separator" />
      <FormAddBook />
    </main>
  );
};

export default BookList;
