// Imports the Card component from React Bootstrap to display movie information
import Card from 'react-bootstrap/Card';

// Imports the Button component from React Bootstrap
import Button from 'react-bootstrap/Button';

// Imports Axios to make HTTP requests to the server
import axios from 'axios';

// Creates the MovieItem component and receives movie information through props
const MovieItem = (props) => {

    // Function that handles deleting a movie when the button is clicked
    const handleDelete = (e) => {

        // Prevents the default form submission behaviour
        e.preventDefault();

        // Displays a message in the console when the delete action starts
        console.log("Delete movie");

        // Sends a DELETE request to the server using the movie's ID
        axios.delete('http://localhost:4000/api/movie/' + props.mymovie._id)
            .then(() => {

                // Displays a message when the movie has been successfully deleted
                console.log("movie deleted");

                // Calls the Reload function to refresh the movie list
                // This removes the deleted movie from the displayed list
                props.Reload();
            })

            // Handles any errors that occur while deleting the movie
            .catch(() => {
                console.log("Error deleting movie");
            });
    };

    // Displays the movie information on the page
    return (
        <div>

            {/* Creates a Bootstrap card to display the movie */}
            <Card className="text-center">

                <Card.Body>

                    {/* Displays the movie title from the database */}
                    <Card.Title>{props.mymovie.title}</Card.Title>

                    {/* Displays the movie poster using its image URL */}
                    <img src={props.mymovie.poster} />

                </Card.Body>

                {/* Displays the movie release year in the card footer */}
                <Card.Footer className="text-muted">
                    {props.mymovie.year}
                </Card.Footer>

                {/* Delete button that calls handleDelete when clicked */}
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>

            </Card>
        </div>
    );
}

// Makes the MovieItem component available to other files
export default MovieItem;