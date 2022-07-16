import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './navBar.css';

const Navbar = () => (
  <header className="nav-bar">
    <Link to="/" className="logo">
      Bookstore CMS
    </Link>
    <ul className="nav">
      <li key="1" className="nav-item">
        <Link to="/" className="nav-link active">
          BOOKS
        </Link>
      </li>
      <li key="2" className="nav-item">
        <Link to="/categories" className="nav-link">
          CATEGORIES
        </Link>
      </li>
    </ul>
    <button className="user-icon-container" type="button">
      <FaUser className="user-icon" />
    </button>
  </header>
);

export default Navbar;
