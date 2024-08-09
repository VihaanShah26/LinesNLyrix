import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Importing CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <div className="logo-and-nav">
          <img src='https://logo-for-app.s3.us-east-2.amazonaws.com/7ce1c91dc6c9ef4dedf3715872b15511.png' alt="Logo"/>
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
      <div className="main-banner">
        <p>From lyrics to legends: Play, Guess and Rise with Lines N Lyrics</p>  
      </div>
      <div className="button-container"> {/* Enclose the button in a div */}
        <Link to="/configure_game"><button className="play-now-btn">PLAY NOW</button></Link>
      </div>
      {/* <Link to="/configure_game" className="play-now-btn">PLAY NOW</Link> */}
      <div className="info-sections">
        <Link to = "how_to_play"> 
          <div className="info-box">
            <h2>How to Play?</h2>
            <p>text here/video</p>
          </div>
        </Link>
        <Link to = '/daily_challenge'> 
          <div className="info-box">
            <h2>Daily Challenge</h2>
            <p>launches daily challenge game</p>
          </div>
        </Link>
        <Link to = "/special_editions">
        <div className="info-box">
          <h2>Special Editions</h2>
          <p>Explore our Special Edition Games</p>
        </div>
          </Link>
      </div>
      <footer>
        <p>Contact info: Insta, Facebook, etc</p>
      </footer>
    </div>
  );
};

export default Home;
