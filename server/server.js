// server.js
const express = require('express');
const app = express();
const PORT = 5500;

// Define a simple route
app.get('/api', (req, res) => {

    res.json({ message: 'Welcome to the backend!' });
});


var get_songs_file = require('./get_songs.js);
app.get('/get_songs', get_songs_file.get_songs);


app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});