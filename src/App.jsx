import { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/game.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx"
import ConfigureGame from "./components/ConfigureGame.jsx";
import GlobalStyle from './GlobalStyle';

import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [randomSongs, setRandomSongs] = useState([]);
  const [gameConfig, setGameConfig] = useState({ rounds: 10, timePerRound: 30, genre: "Any", decade: "Any" });

  const baseURL = "http://linesserver-env.eba-zqbymp9q.us-east-2.elasticbeanstalk.com";
  useEffect(() => {
    const queryParams = new URLSearchParams({
      rounds: gameConfig.rounds,
      timePerRound: gameConfig.timePerRound,
      genre: gameConfig.genre,
      decade: gameConfig.decade,
    });

    axios.get(baseURL + "/get_songs?" + queryParams)
      .then((response) => {
        console.log(response); 
        setRandomSongs(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [gameConfig]);


  console.log(randomSongs);
  return (
    <main>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/configure_game" element={<ConfigureGame setConfig={setGameConfig} />} />
          <Route path="/game" element={<Game data={randomSongs} config={gameConfig} />} />
        </Routes>
      </Router>
    </main>
  );
}
