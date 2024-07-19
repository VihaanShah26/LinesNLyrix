import React from 'react';
import { Link } from 'react-router-dom';

const Choose_game = () => {
  return (
    <div>
      <h2>Intermediate Page</h2>
      <Link to="/game"><button>Start Game</button></Link>
    </div>
  );
};

export default Choose_game;
