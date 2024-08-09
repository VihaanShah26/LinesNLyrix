import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Importing CSS for styling
import './about.css'; // Assuming additional specific styling for About page

const About = () => {
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
      <div className="content-area">
        <div className="about-content">
          <h1>About Us</h1>
          <p>In 2018, before going to grad school in social work, Noah Doppelt, with his dad Jack, reveled in the family music experiences they shared, most notably on car trips. As a family of gamers, they enjoyed activities like counting state license plate sightings, comparing population sizes of cities, and ranking the world’s tallest buildings while tunes played as mom drove and sister Sylvie controlled the playlists.</p>
          <p>With no inkling of the impending Covid pandemic or Jack’s transition to Professor Emeritus of Journalism, they decided to launch a music trivia game. Initially considered naming it "Dop and Pop", they finally settled on "Lines n’ Lyrix".</p>
          <p>They created an online version available at www.doppeltlines.com. The game was introduced to Chicago bars that host trivia nights, company events, and reunions, and was enhanced with photo montages across more than a dozen editions - featuring genres and decades so players could choose their favorites like The Beatles, Paul Simon, and Dylan.</p>
          <p>Special editions were added for various life events such as Christmas, Mother’s Day, Earth Day, and many others, with an inventory now exceeding 2,000 songs. The game challenges players to guess the SONG NAME and WHO’s KNOWN FOR SINGING IT from iconic lyric bursts, with each song cued on YouTube to the lyrics guessed, allowing players to enjoy the music along with evocative videos.</p>
          <p>The game, a creation of the father-son team Jack and Noah Doppelt, continues to be a testament to their bond and shared love for music and games.</p>
        </div>
      </div>
      <footer>
        <p>Contact info: Insta, Facebook, etc</p>
      </footer>
    </div>
  );
};

export default About;
