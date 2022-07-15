import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import bookReducer, { bookThunkReducer } from './books/books';
import statusReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  bookThunkReducer,
  category: statusReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
