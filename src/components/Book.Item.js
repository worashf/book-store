import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = ({ id, title, author }) => {
  const dispatch = useDispatch();

  return (
    <div className="book-info">
      <div className="info">
        <p>Book categories</p>
        <h3 style={{ color: 'red' }}>{title}</h3>
        <p>{author}</p>
        <div className="book-btn">
          <button type="button"> Comments</button>
          <button type="button" onClick={() => dispatch(removeBook(id))}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div className="progress-icon" />
        <div className="status">
          <h4>100%</h4>
          <p>Completed</p>
        </div>
      </div>

      <div className="chapter">
        <p>Current chapter</p>
        <h4>Chapter</h4>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
};

export default BookItem;

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
