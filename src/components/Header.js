import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header__section">
      <header>
        <h2>Advertyzement</h2>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/users">Get User</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
