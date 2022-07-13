import React from 'react';

import { useSelector } from 'react-redux';
import BookItem from './Book.Item';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      {books.map((book) => (
        <BookItem
          title={book.title}
          author={book.author}
          key={book.id}
          id={book.id}
        />
      ))}
    </>
  );
};

export default BookList;
