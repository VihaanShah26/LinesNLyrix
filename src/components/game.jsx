import React, { useState, useEffect } from "react";
import { levenshteinEditDistance } from 'levenshtein-edit-distance';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
import './header.css'

const Game = ({ data, config }) => {
  const { rounds, timePerRound } = config;
  const [guesses, setGuesses] = useState({});
  const [answeredCorrectly, setAnsweredCorrectly] = useState({});
  const [showSongInfo, setShowSongInfo] = useState({});
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [timer, setTimer] = useState(timePerRound);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (answeredCorrectly[currentSongIndex] || showSongInfo[currentSongIndex]) {
      return;
    }

    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdown);
          setShowSongInfo({ ...showSongInfo, [currentSongIndex]: true });
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentSongIndex, answeredCorrectly, showSongInfo, timer]);

  useEffect(() => {
    setTimer(timePerRound);
  }, [currentSongIndex, timePerRound]);

  const handleGuess = (event) => {
    event.preventDefault();
    const guessedSongName = guesses[currentSongIndex]?.toLowerCase().trim();
    const correctSongName = data[currentSongIndex].song_name.toLowerCase().trim();
    const levenshteinDistance = levenshteinEditDistance(guessedSongName, correctSongName);
    const maxAllowedDistance = correctSongName.length / 3;

    if (levenshteinDistance <= maxAllowedDistance) {
      setAnsweredCorrectly({ ...answeredCorrectly, [currentSongIndex]: true });
      setScore(score + 1);
    } else {
      alert('Incorrect guess. Try again!');
    }
  };

  const handleInputChange = (event) => {
    const newGuesses = { ...guesses };
    newGuesses[currentSongIndex] = event.target.value;
    setGuesses(newGuesses);
  };

  const handleShowButtonClick = () => {
    setShowSongInfo({ ...showSongInfo, [currentSongIndex]: true });
  };

  const handleNextSongClick = () => {
    setCurrentSongIndex(currentSongIndex + 1);
  };

  if (currentSongIndex >= data.length || currentSongIndex >= rounds) {
    return (
      <div>
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
      <div style={styles.gameContainer}>
        <div style={styles.gameOver}>
          <h1>Game Over</h1>
          <p>Your score: {score} out of {Math.min(data.length, rounds)}</p>
        </div>
      </div>
        <footer>
          <p>Contact info: Insta, Facebook, etc</p>
        </footer>
      </div>
    );
  }

  const currentItem = data[currentSongIndex];
  const currentRound = currentSongIndex + 1;
  const youtubeLink = currentItem.youtube_link;
  let videoId, startTime;
  if (youtubeLink) {
    const match = youtubeLink.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu.be\/)([a-zA-Z0-9_-]{11})(?:.*[?&]t=(\d+))?/);
    if (match) {
      videoId = match[1];
      startTime = match[2];
    }
  }

  return (
    <div style={styles.gameContainer}>
      <div style={styles.headerContainer}>
        <img src='https://s3-alpha-sig.figma.com/img/8026/ce21/7ce1c91dc6c9ef4dedf3715872b15511?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nsUHkXgzHa7shn~PMcVkbsemwF-e8Io2nLOsGH1TvyUuBMWjTdl7GetNK-GPWeofhnR8Qajd2~JfttWjjWA96x-MYth9Izcqf-6BRRfHs5KZHx-v8bqy1RnE8zFm-ydsSCSJaT3zO0V0ovLl4xSe0cJkku3Qohv1Y~A4U2eUTgZh9bEPrZGnKEn9tupErg9mtY8O9ME3WPdOcHsAJkdQjEE9cBTXEl8zHBBkd8TSmcj6Qi0ghAQq2zt4LIA-RAF-g3j1EZZMixNJ88qz6TwEQhi57yr4z8ci3P5OpEMDkKM4qrKaaIwrROGUGhqnuqveDJ7vHRx7f4WTTw8tVzxWGQ__' alt="Logo" style={styles.logo} />
        <div style={styles.roundDisplay}>
          <h2>Round {currentRound} / {Math.min(data.length, rounds)}</h2>
          <CountdownTimer totalTime={timePerRound} currentTime={timer} />
        </div>
      </div>
      <div style={styles.guessHeader}>
        <h2>Read the Lyrics and Guess the Song!</h2>
      </div>
      <div style={styles.roundInfo}>
        {(answeredCorrectly[currentSongIndex] || showSongInfo[currentSongIndex]) ? (
          <div style={styles.songDetails}>
            <h2>{currentItem.song_name}</h2>
            <p style={styles.artistDetails}>Artist: {currentItem.artist}</p>
            <p style={styles.artistDetails}>Decade: {currentItem.decade}</p>
            <p style={styles.artistDetails}>Genre: {currentItem.genre}</p>
            <p style={styles.artistDetails}>Song Year: {currentItem.song_year}</p>
            {videoId && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}${startTime ? `?start=${startTime}` : ''}`}
                frameBorder="0"
                allowFullScreen
                style={styles.video}
              ></iframe>
            )}
            <br></br>
            <button onClick={handleNextSongClick} style={styles.button}>Next Song</button>
          </div>
        ) : (
          <form onSubmit={handleGuess} style={styles.guessForm}>
            <div style ={styles.lyrics}>
              {currentItem.lyrix.split('\n').map((line, idx) => (
                <p key={idx} style={styles.lyrics}>{line}</p>
              ))}
            </div>
            <input
              type="text"
              value={guesses[currentSongIndex] || ''}
              onChange={handleInputChange}
              placeholder="Your guess..."
              style={styles.input}
            />
            <div style={styles.buttonContainer}>
              <button type="submit" style={styles.button}>Submit Guess</button>
              <button onClick={handleShowButtonClick} style={styles.button}>Show Song Info</button>
            </div>
          </form>
        )}
      </div>
      <footer>
        <p>Contact info: Insta, Facebook, etc</p>
      </footer>
    </div>
  );
};


  const styles = {
    gameContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '90vh',
      backgroundColor: '#f44236',
      color: '#FFFFFF',
      fontFamily: "'Bebas Neue', cursive",
      textAlign: 'center',
      padding: '1vh 0',
    },
    headerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // Center the content horizontally
      width: '100%',
      position: 'relative', // To allow absolute positioning of the logo
    },
    logo: {
      height: '100px',
      position: 'absolute', // Position the logo absolutely within the header
      left: '20px', // Adjust as necessary to position it correctly
    },
    roundDisplay: {
      textAlign: 'center',
      fontSize: '1.5rem', // Made the text slightly bigger
    },
    guessHeader: {
      textAlign: 'center',
      fontSize: '1.5rem', // Made the text slightly bigger
      marginTop: '0px', // Added margin for better spacing
    },
    roundInfo: {
      backgroundColor: '#1A3763',
      width: '50%',
      height: 'calc(100vh - 220px)',
      overflowY: 'auto',
      padding: '10px',
      textAlign: 'center',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      margin: ' 0',
      fontFamily: "'Roboto', sans-serif", 
      textAlign: 'center',
    },
    songDetails: {
      fontSize: '1rem',
      
      lineHeight: '1.2',
      width: '100%',
    },
    guessForm: {
      width: '100%',
    },
    video: {
      width: '100%',
      height: '68%',
      maxWidth: '560px',
      margin: '0px 0px 10px 0px',
      
    },
    input: {
      width: '90%',
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '5px',
    },
    button: {
      backgroundColor: '#F39C12',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      color: '#FFFFFF',
      margin: '5px',
      fontSize: '0.9rem',
    },
    gameOver: {
      width: '30%',
      height: '40%',
      backgroundColor: '#1A3763',
      color: '#FFFFFF',
      fontSize: '1.5rem',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

    },
    artistDetails:{
      fontSize: '0.9rem',
    }
    
  };

export default Game;
