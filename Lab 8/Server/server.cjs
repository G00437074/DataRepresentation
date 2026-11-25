// Loads environment variables from the .env file
require('dotenv').config();

const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

// Allows the server to accept requests from different origins
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Imports body-parser to read data sent to the server
const bodyParser = require('body-parser');
// Allows the server to read form data from requests
app.use(bodyParser.urlencoded({ extended: true }));
// Allows the server to read JSON data from requests
app.use(bodyParser.json());

// Imports Mongoose to connect to and work with MongoDB
const mongoose = require('mongoose');
// Connects to MongoDB using the connection string stored in the .env file
mongoose.connect(process.env.MONGO_URI);

// Creates a schema that defines what information each movie will store
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

// Creates a Movie model using the movie schema
// This model allows us to add, find and delete movies in MongoDB
const Movie = mongoose.model('Movie', movieSchema);

// GET route for the homepage
// Displays a simple message when someone visits the server
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Endpoint to delete a movie by its ID
app.delete('/api/movie/:id', async (req, res) => {
  try {
    // Log the ID of the movie being deleted for debugging purposes
    console.log('Deleting movie with ID:', req.params.id);
    // Use Mongoose to find the movie by its ID and delete it from the database
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).send({ message: "Movie not found" });
    }
    // Send a success response back to the client with a message and the deleted movie details
    res.status(200).send({ message: "Movie deleted successfully", movie });
    console.log('Movie deleted with ID: ' + req.params.id);
  } catch (error) {
    // Send an error response if the ID is invalid or the database call fails
    console.error('Error deleting movie:', error);
    res.status(500).send({ message: "Error deleting movie", error: error.message });
  }
});

app.get('/api/movies', async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});



// app.get('/api/movies', (req, res) => {
//   const myMovies = [
//     {
//       "Title": "Avengers: Infinity War (server)",
//       "Year": "2018",
//       "imdbID": "tt4154756",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
//     },
//     {
//       "Title": "Captain America: Civil War (server)",
//       "Year": "2016",
//       "imdbID": "tt3498820",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
//     },
//     {
//       "Title": "World War Z (server)",
//       "Year": "2013",
//       "imdbID": "tt0816711",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
//     }
//   ]
//   res.json({ myArray: myMovies });
// })

// POST route to add a new movie to the database
app.post('/api/movies', async (req, res) => {


  // Gets the movie details sent from the client
  const { title, year, poster } = req.body;

  // Creates a new movie using the information received
  const newMovie = new Movie({ title, year, poster });
  await newMovie.save();

  res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

// GET route to retrieve one movie using its ID
app.get('/api/movie/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.send(movie);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});