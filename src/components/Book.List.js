import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import BookItem from './Book.Item';
import { getBooks } from '../redux/books/bookStoreAsync';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  // const appId = 'MtkgUTsGBdDr5ZeaGTZp';
  // const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7Yk0oIip10822KACVnk2/books/';
  console.log('state', books);
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
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
    </>
  );
};

export default BookList;
