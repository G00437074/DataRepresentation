import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// Import the axios library for making HTTP requests
const MovieItem = (props) => {
    // Function to handle the deletion of a movie
    const handleDelete = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        console.log("Delete movie");

        // Send a DELETE request to the server to delete the movie with the specified ID
        axios.delete('http://localhost:4000/api/movie/' +props.mymovie._id)
            .then(() => {
                console.log("movie deleted");
                props.Reload(); // Refresh the movie list after deletion
            })
            // Catch any errors that occur during the deletion process and log them to the console
            .catch(()=>{
                console.log("Error deleting movie");
            });
    };

    return (
        <div>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>{props.mymovie.title}</Card.Title>
                    <img src={props.mymovie.poster} />
                </Card.Body>
                <Card.Footer className="text-muted">{props.mymovie.year}</Card.Footer>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
    );
}
export default MovieItem;