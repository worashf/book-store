import React from 'react';

const BookFrom = () => (
  <div>
    <form>
      <h2> Add New Book</h2>
      <input type="text" name="title" placeholder="Book Title" />
      <input type="text" name="author" placeholder="Author" />
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default BookFrom;
