import React from 'react';

const BookFrom = () => (
  <form className="book-form">
    <h2> Add New Book</h2>
    <input type="text" name="title" placeholder="Book Title" />
    <input type="text" name="author" placeholder="Author" />
    <button type="button">Add Book</button>
  </form>
);

export default BookFrom;
