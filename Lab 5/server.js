const express = require('express');
const app = express();
const port = 3000;
// Import the path module to work with file and directory paths
const path = require('path');

// Middleware to parse JSON bodies
const bodyParser = require('body-parser');
// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route with Hello message
app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});


// Route with URL parameter (Name)
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

// Route with URL parameter (Name + Surname)
app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`Hello ${name} ${surname}`);
});

// /api/movies route that returns a lsit of movie objects in JSON format
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    // Status code 201 indicates that the request has been fulfilled and has resulted in one or more new resources being created.
    res.status(201).json({ movies });
});

// Route to serve the index.html file
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// Route to handle query parameters (Name + Surname)
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

// Route to handle POST requests with form data (Name + Surname)
app.post('/name', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Goodbye ${firstname} ${lastname}`);
});


// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

