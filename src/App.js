import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import BookCoverList from './pages/BookCoverList';
import Login from './pages/Login';
import BookDetail from './pages/BookDetail';
import AddBook from './pages/AddBook';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<BookCoverList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 