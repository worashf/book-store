import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks, addBook, deleteBook } from '../bookApi';

const ADD_BOOK = 'books/ADD_BOOK';
const DELETE_BOOK = 'books/DELETE_BOOK';
const GET_BOOKS = 'books/GET_BOOKS';
export const getBooks = createAsyncThunk(GET_BOOKS, async (_, { dispatch }) => {
  const result = await fetchBooks().then((data) => dispatch({
    type: GET_BOOKS,
    payload: data,
  }));
  return result;
});

export const addBookThunk = createAsyncThunk(
  ADD_BOOK,
  async (book, { dispatch }) => {
    console.log(1, book);
    const data = await addBook(book).then(() => dispatch({
      type: ADD_BOOK,
      id: book.item_id,
      title: book.title,
      author: book.author,
      category: book.category,
    }));
    return data;
  },
);

export const deleteBookThunk = createAsyncThunk(
  DELETE_BOOK,
  async (id, { dispatch }) => {
    const result = await deleteBook(id).then(() => dispatch({
      type: DELETE_BOOK,
      id,
    }));
    return result;
  },
);
