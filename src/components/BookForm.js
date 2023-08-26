import React from 'react';

const BookForm = () => {
  return (
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
