// Import the MovieItem component so we can display each movie
import MovieItem from './MovieItem.jsx'

// Define the Movies component
// It receives a "movies" array through props
export default function Movies(props) {

    // Loop through each movie in the movies array
    // and create a MovieItem component for it
    return props.movies.map(
        (movie) => {
            // Pass the current movie to MovieItem as "mymovie"
            // Use imdbID as the unique key for React
            return <MovieItem mymovie={movie} key={movie.imdbID}></MovieItem>
        }
    );
}