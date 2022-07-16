import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { deleteBookThunk } from '../redux/books/bookStoreAsync';

const BookItem = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const circleProgress = {
    width: '80px',
    height: '80px',
  };
  return (
    <div className="book-info">
      <div className="book">
        <div className="info">
          <p className="book-category">Book categories</p>
          <h3 className="book-title">{title}</h3>
          <p className="book-author">{author}</p>
          <div className="book-btns">
            <button type="button" className="book-btn">
              Comments
            </button>
            <div className="btn-devider" />
            <button
              type="button"
              className="book-btn"
              onClick={() => dispatch(deleteBookThunk(id))}
            >
              Remove
            </button>
            <div className="btn-devider" />
            <button type="button" className="book-btn">
              Edit
            </button>
          </div>
        </div>
        <div className="progress">
          <div style={circleProgress} className="circle-bar">
            <CircularProgressbar
              value={80}
              styles={buildStyles({
                pathColor: '#0290ff',
                rotation: 90,
              })}
            />
          </div>
          <div className="status">
            <h4 className="percent-completed">80%</h4>
            <p className="completed-status">Completed</p>
          </div>
        </div>
        <div className="divider" />
        <div className="chapters">
          <p className="current-chapter">Current chapter</p>
          <h4 className="chapter">Chapter</h4>
          <button type="button" className="chapter-btn">
            Update progress
          </button>
        </div>
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
