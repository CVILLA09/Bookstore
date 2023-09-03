import React, { useState } from 'react';
import AddBook from './AddBook';
import '../styles/formAddBook.css';

const FormAddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleAddBook = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <section className="addBook-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="form-container">
        <input
          className="input-title"
          type="text"
          id="title"
          name="title"
          placeholder="Book title"
          required
          onChange={handleTitleChange}
          value={title}
        />
        <input
          className="input-author"
          type="text"
          id="author"
          name="author"
          placeholder="Author"
          required
          onChange={handleAuthorChange}
          value={author}
        />
        <select
          className="input-category"
          id="category"
          name="category"
          required
          onChange={handleCategoryChange}
          value={category}
        >
          <option value="" disabled selected>Category</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Comedy">Romance</option>
          <option value="Comedy">Mistery</option>
          <option value="Comedy">Historical</option>
        </select>
        <AddBook
          title={title}
          author={author}
          category={category}
          onBookAdded={handleAddBook}
        />
      </form>
    </section>
  );
};

export default FormAddBook;
