import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import BookItem from './Book.Item';
import { getBooks } from '../redux/books/bookStoreAsync';
import './bookList.css';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="book-container">
      {books.length ? (
        books.map((book) => (
          <BookItem
            title={book.title}
            author={book.author}
            key={book.id}
            id={book.id}
          />
        ))
      ) : (
        <div className="fieldEmpty">Books not found</div>
      )}
      <div className="book-divider" />
    </div>
  );
};

export default BookList;
