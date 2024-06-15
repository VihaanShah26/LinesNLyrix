CREATE DATABASE IF NOT EXISTS linesnlyrixdb;

USE linesnlyrixdb;

DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
  song_id INT PRIMARY KEY AUTO_INCREMENT,
  songs_potpourri VARCHAR(20),
  lyrix VARCHAR(1000),
  song_name VARCHAR(80),
  artist VARCHAR(80),
  youtube_link VARCHAR(150),
  decade VARCHAR(20),
  genre VARCHAR(50),
  song_year INT, 
  album VARCHAR(80),
  cover VARCHAR(150)
);
ALTER TABLE songs AUTO_INCREMENT = 1;