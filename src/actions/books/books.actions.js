import { ADD_BOOK, REMOVE_BOOK } from '../../constants/books.constants';

const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export { addBook, removeBook };
