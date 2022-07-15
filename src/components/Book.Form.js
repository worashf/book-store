import React, { useState } from 'react';

import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addBookThunk } from '../redux/books/bookStoreAsync';

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
      <h2> Add New Book</h2>
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookFrom;
