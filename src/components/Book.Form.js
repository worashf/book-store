import React, { useState } from 'react';

import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addBookThunk } from '../redux/books/bookStoreAsync';
import './book.from.css';

const BookFrom = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const createBook = (title, author) => {
    const book = {
      item_id: nanoid(),
      title,
      author,
      category: 'Not Specificated',
    };

    return book;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookThunk(createBook(title, author)));
    e.target.title.value = '';
    e.target.author.value = '';
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2 className="form-title"> Add New Book</h2>
      <div className="inputs">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          className="book-input"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          className="category-input"
        />
        <button type="submit" className="form-btn">
          Add Book
        </button>
      </div>
    </form>
  );
};

export default BookFrom;
