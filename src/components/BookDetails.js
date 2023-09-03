import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';
import '../styles/bookDetails.css';

const BookDetails = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const percentage = Math.floor(Math.random() * 101);
  const chapter = percentage <= 10 ? 1 : Math.min(
    Math.max(parseInt(percentage.toString()[0], 10), 1),
    percentage === 100 ? 10 : 9,
  );

  const handleRemoveBook = () => {
    dispatch(removeBookAsync(id));
  };

  return (
    <section className="d-flex book-element--container">
      <div className="d-flex roboto-font book-info">
        <p className="roboto-font category">{category}</p>
        <p className="roboto-font subtitle">{title}</p>
        <p className="roboto-font author">{author}</p>
        <div className="d-flex buttons">
          <button id={id} type="button">Comments</button>
          <span className="button-separator" />
          <button type="button" onClick={handleRemoveBook}>Delete</button>
          <span className="button-separator" />
          <button id={id} type="button">Edit</button>
        </div>
      </div>
      <div className="d-flex percentage-container">
        <div className="percentage-animation">
          <CircularProgressbar className="circular-progressbar" value={percentage} />
        </div>
        <div className="d-flex roboto-font percentage-info">
          <p className="roboto-font percentage">{`${percentage}%`}</p>
          <p className="roboto-font completed">Completed</p>
        </div>
      </div>
      <span className="section-separator" />
      <div className="d-flex roboto-font update">
        <p className="roboto-font update-title">CURRENT CHAPTER</p>
        <p className="roboto-font chapter-p">{`Chapter ${chapter}`}</p>
        <button id={id} type="button">Update Progress</button>
      </div>
    </section>
  );
};

BookDetails.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookDetails;
