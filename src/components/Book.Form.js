import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookFrom = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random();
    dispatch(addBook(id, title, author));
    setTitle((e.target.title.value = ''));
    setAuthor((e.target.author.value = ''));
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2> Add New Book</h2>
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookFrom;
