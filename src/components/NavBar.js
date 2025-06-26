import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/NavBar.css';

function NavBar() {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/login');
  };

  const goToHome = () => {
    navigate('/');
  }

  const goToAddBookPage = () => {
    navigate('/add-book');
  }

  return (
    <nav className="navbar">
      <button className='titles' onClick={goToHome}>
        <div className="navbar-title">개발자를 위한 책 목록</div>
        <div className="navbar-subtitle">Bookcase for Developers</div>
      </button>
      <div className="navbar-menu">
        <button className="nav-btn login-btn" onClick={goToLoginPage}>
          로그인
        </button>
        <button className='nav-btn login-btn' onClick={goToAddBookPage}>
          책추가
        </button>
      </div>
    </nav>
  );
}

export default NavBar; 