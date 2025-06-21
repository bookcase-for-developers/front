import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/NavBar.css';

function NavBar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div>
        <div className="navbar-title">개발자를 위한 책 목록</div>
        <div className="navbar-subtitle">Bookcase for Developers</div>
      </div>
      <div className="navbar-menu">
        <button className="nav-btn login-btn" onClick={handleLogin}>
          로그인
        </button>
      </div>
    </nav>
  );
}

export default NavBar; 