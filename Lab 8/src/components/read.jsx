// Imports useEffect and useState from React
import { useEffect, useState } from "react";

// Imports Axios, which is used to make requests to the server
import axios from "axios";

// Imports the Movies component
import Movies from "./movies";

const Read = () => {

    // Creates a state variable to store the list of movies
    // setMovie is used to update the movie list
    const [myMovies, setMovie] = useState([]);

    // Function to reload movie data from the server
    const Reload = () => {

        // Sends a GET request to the server to retrieve all movies
        axios.get("http://localhost:4000/api/movies")
            .then((response) => {

                // Updates the movie list with the data received from the server
                setMovie(response.data);
            })
            .catch((error) => {

                // Displays an error in the console if the request fails
                console.error("Error reloading data:", error);
            });
    };

    // Runs when the Read component first loads
    useEffect(() => {

        // Calls Reload to fetch the movies from the database
        Reload();

    }, []); // Empty array means this only runs when the component first loads

    // Displays the content on the page
    return (
        <div>

            {/* Displays a heading on the page */}
            <h1>Hello from Read component</h1>

            {/* Passes the movie list and Reload function to the Movies component */}
            <Movies myMovies={myMovies} Reload={Reload} />

        </div>
    );
};

// Makes the Read component available to other files
export default Read;