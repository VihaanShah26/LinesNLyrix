import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ConfigureGame.css'; // Importing CSS for styling
import './header.css'


const ConfigureGame = ({ setConfig }) => {
  const [rounds, setRounds] = useState(10);
  const [timePerRound, setTimePerRound] = useState(30);
  const [genre, setGenre] = useState('Any');
  const [decade, setDecade] = useState('Any');
  const navigate = useNavigate();
  const [allgenres, setAllGenres] = useState([]);

  const baseURL = "https://8a94255d-028c-440f-b8e4-568d8bc36a86-00-278n4aulvo2oq.janeway.replit.dev";
  useEffect(() => {
    axios.get(baseURL + "/get_genres")
      .then((response) => {  
        setAllGenres(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleStartGame = () => {
    setConfig({ rounds, timePerRound, genre, decade });
    navigate('/game');
  };

  return (
    <div className="game-configuration">
      
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
      <div className="configuration-container">
        <div className="config-option">
          <label>Number of Rounds:</label>
          <input type="number" min="1" max="20" value={rounds} onChange={(e) => setRounds(parseInt(e.target.value))} />
        </div>
        <div className="config-option">
          <label>Time Per Round (seconds):</label>
          <input type="number" min="5" max="60" value={timePerRound} onChange={(e) => setTimePerRound(parseInt(e.target.value))} />
        </div>
        <div className="config-option">
          <label>Genre:</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="Any">Any</option>
            {allgenres
              .filter(genreObj => genreObj.genre && genreObj.genre !== 'Genre')
              .map((genreObj, index) => (
                <option key={index} value={genreObj.genre}>{genreObj.genre}</option>
              ))}
          </select>
        </div>
        <div className="config-option">
          <label>Decade:</label>
          <select value={decade} onChange={(e) => setDecade(e.target.value)}>
            <option value="Any">Any</option>
            <option value="1960s">1960s</option>
            <option value="1970s">1970s</option>
            <option value="1980s">1980s</option>
            <option value="1990s">1990s</option>
            <option value="2000s">2000s</option>
            <option value="2010s">2010s</option>
          </select>
        </div>
        <button className="start-button" onClick={handleStartGame}>Start Game</button>
      </div>
      <footer>
        <p>Contact info: Insta, Facebook, etc</p>
      </footer>
    </div>
  );
};

export default ConfigureGame;
