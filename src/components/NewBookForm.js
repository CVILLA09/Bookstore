import React from 'react';

const NewBookForm = () => (
  <form>
    <input type="text" placeholder="Title" />
    <input type="text" placeholder="Author" />
    <button type="submit">Add Book</button>
  </form>
);

export default NewBookForm;