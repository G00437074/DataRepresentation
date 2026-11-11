
// Read.js
// Import the Movies component
import Movies from './Movies';
// Import React hooks
import { useEffect, useState } from "react";
// Import Axios to make HTTP requests
import axios from "axios";

function Read() {
    // Create a state variable to store movies
    const [movies, setMovies] = useState([]);

    // Fetch movie data when the component loads
    useEffect(() => {
        axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json')
            .then((response) => {
                // Store the movie data in the state
                setMovies(response.data.myArray);
            })
            .catch((error) => {
                // Display an error if the request fails
                console.log(error);
            });
    }, []); // Empty array means this runs only once when mounted

    // Display the heading and pass movie data to Movies
    return (
        <div>
            <h2>This is my Read Component.</h2>
            <Movies movies={movies} />
        </div>
    );
}

// Export the Read component for use in other files
export default Read;
