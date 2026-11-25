
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./movies";

const Read = () => {
    const [myMovies, setMovie] = useState([]);

    // Function to reload movie data from the server
    const Reload = () => {

        axios.get("http://localhost:4000/api/movies")
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    // Fetch movies when the component mounts
    useEffect(() => {
        Reload();
    }, []);

    return (
        <div>
            <h1>Hello from Read component</h1>
            <Movies myMovies={myMovies} Reload={Reload} />
        </div>
    );
};

export default Read;
