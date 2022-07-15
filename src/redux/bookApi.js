import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9HGA7z67awYIYoREUqRi/books';

const createBooksList = (obj) => {
  const result = [];
  Object.entries(obj).forEach((book) => {
    result.push({
      ...book[1][0],
      id: book[1][0],
    });
  });
  return result;
};

export const fetchBooks = async () => {
  try {
    const res = await axios.get(baseUrl);
    return createBooksList(res.data);
  } catch (err) {
    throw new Error(err);
  }
};

export const addBook = async (book) => {
  try {
    const res = await axios.post(baseUrl, book);
    console.log('res[po', res);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteBook = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}/${id}`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
