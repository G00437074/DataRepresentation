// Imports the MovieItem component, which displays an individual movie
import MovieItem from './movieItem';

// Creates the Movies component and receives data through props
const Movies = (props) => {

    // Loops through the movie list and creates a MovieItem for each movie
    return props.myMovies.map(
        (movie) => {

            // Displays an individual movie and passes its information
            // and the Reload function to the MovieItem component
            return (
                <MovieItem
                    mymovie={movie}
                    Reload={props.Reload}
                    key={movie._id}
                ></MovieItem>
            );
        }
    );
}

// Makes the Movies component available to other files
export default Movies;