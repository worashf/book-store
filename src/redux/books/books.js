const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
const books = [
  {
    id: 1,
    title: 'Cheque book',
    author: 'Vasdev Mohi',
  },
  {
    id: 2,
    title: 'The Overstory',
    author: 'Richard Powers',
  },
  {
    id: 3,
    title: 'The Braille edition of the book Exam Warriors',
    author: 'PM Narendra Modi',
  },
];

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
