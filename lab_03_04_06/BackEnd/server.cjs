// Import the Express module
const express = require('express');
const app = express()
const port = 4000

// Import the CORS module to handle cross-origin requests
const cors = require('cors');
app.use(cors());

// Import the body-parser module to parse incoming request bodies
const bodyParser = require('body-parser');
// Use body-parser middleware to parse URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to set headers for CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Define a route to handle POST requests to add a new movie
app.post('/api/movies', (req, res) => {
    console.log('Movie Received!')
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
    res.send('Movie Added');
})

// Define a route to handle the root URL
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Define a route to get movie data
app.get('/api/movies', (req, res) => {
    const movies = [

        {
            "Title": "Avengers: Infinity War (server)",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War (server)",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z (server)",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ];
    // Send the movie data as a JSON response
    res.json({ movies })

})


// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message to the console indicating that the server is running
    console.log(`Example app listening on port ${port}`)
})