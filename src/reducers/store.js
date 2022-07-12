import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books.reducer';

const rootReducer = combineReducers(bookReducer);

const store = configureStore({ reducer: rootReducer });

export default store;
