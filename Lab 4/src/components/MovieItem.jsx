import Card from 'react-bootstrap/Card';

export default function MovieItem(props) {
    // Display information about a single movie
    // The movie object is received through the "mymovie" prop
    return (
        <div>
            {/*</div>
             Display the movie's title 
            <h3>{props.mymovie.Title}</h3>
            Display the movie's release year 
            <p>{props.mymovie.Year}</p>
            Display the movie poster. 
            <img src={props.mymovie.Poster} alt={props.mymovie.Title} /></div> */}

            <Card style={{ width: '200px'}}>
                {/* Displays the movie poster at the top of the card */}
                <Card.Img variant="top" src={props.mymovie.Poster} />
                <Card.Body>
                      {/* Displays the movie title */}
                    <Card.Title>{props.mymovie.Title}</Card.Title>
                    {/* Displays the movie release year */}
                    <Card.Text>
                        {props.mymovie.Year}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}