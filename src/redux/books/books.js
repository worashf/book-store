import { createSlice } from '@reduxjs/toolkit';
import { getBooks } from './bookStoreAsync';

const ADD_BOOK = 'books/ADD_BOOK';
const DELETE_BOOK = 'books/DELETE_BOOK';
const GET_BOOKS = 'books/GET_BOOKS';
const initialState = {
  loading: false,
};

const books = createSlice({
  name: 'books',
  initialState,

  extraReducers: {
    [getBooks.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [getBooks.fulfilled]: (state) => ({
      ...state,
      loading: false,
    }),
    [getBooks.rejected]: (state) => ({
      ...state,
      loading: false,
    }),
  },
});

export const bookThunkReducer = books.reducer;

const bookReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          category: action.category,
        },
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;
