import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookPage from './pages/Book.Page';
import NoFound from './pages/NoFound';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </Router>
  );
}

export default App;
