import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Importing CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <div className="logo-and-nav">
          <img src='https://s3-alpha-sig.figma.com/img/8026/ce21/7ce1c91dc6c9ef4dedf3715872b15511?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nsUHkXgzHa7shn~PMcVkbsemwF-e8Io2nLOsGH1TvyUuBMWjTdl7GetNK-GPWeofhnR8Qajd2~JfttWjjWA96x-MYth9Izcqf-6BRRfHs5KZHx-v8bqy1RnE8zFm-ydsSCSJaT3zO0V0ovLl4xSe0cJkku3Qohv1Y~A4U2eUTgZh9bEPrZGnKEn9tupErg9mtY8O9ME3WPdOcHsAJkdQjEE9cBTXEl8zHBBkd8TSmcj6Qi0ghAQq2zt4LIA-RAF-g3j1EZZMixNJ88qz6TwEQhi57yr4z8ci3P5OpEMDkKM4qrKaaIwrROGUGhqnuqveDJ7vHRx7f4WTTw8tVzxWGQ__' alt="Logo"/>
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
