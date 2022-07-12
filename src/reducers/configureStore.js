import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import bookStatusReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  bookStatusReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
