const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

// Enable CORS for all routes
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Middleware to parse incoming request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.qxd20vz.mongodb.net/MoviesDB');

// Define a schema and model for movies
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

// Create a model based on the schema
const MovieModel = mongoose.model('Movie', movieSchema);

// Define a route to test the server
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Define a route to get all movies
app.get('/api/movies', async (req, res) => {
  // Fetch all movies from the database
  const movies = await MovieModel.find({});
  // Send the movies as a JSON response
  res.json(movies);
})

// Define a route to get a specific movie by ID
app.get('/api/movie/:id', async (req, res) => {
  // Fetch the movie with the specified ID from the database
  const movie = await MovieModel.findById(req.params.id);
  // Send the movie as a JSON response  
  res.send(movie);
});

// Define a route to create a new movie
app.post('/api/movies', async (req, res) => {
  // Log the request body to the console for debugging
  console.log(req.body);
  // Extract the movie details from the request body
  const { title, year, poster } = req.body;

  // Create a new movie document and save it to the database
  const newMovie = new MovieModel({ title, year, poster });

  // Save the new movie to the database
  await newMovie.save();

  // Send a success response with the created movie
  res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
});

// Define a route to update an existing movie by ID
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});