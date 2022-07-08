import React from 'react';
import BookFrom from '../components/Book.Form';
import BookList from '../components/Book.List';

const BookPage = () => (
  <div className="container">
    <BookList />
    <BookFrom />
  </div>
);

export default BookPage;
