import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
<header>
  <div className="logo-and-nav">
    <img src='https://logo-for-app.s3.us-east-2.amazonaws.com/7ce1c91dc6c9ef4dedf3715872b15511.png'alt="Logo"/>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/playlist">Playlist</Link>
      <Link to="/collection">Collection</Link>
      <Link to="/about">About Us</Link>
      <Link to="/login">Log In</Link>
    </nav>
  </div>
  
</header>
}

export default Header;