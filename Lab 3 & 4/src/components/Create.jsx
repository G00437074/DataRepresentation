// create.js

// Import useState hook from React
import { useState } from "react";

// Define the Create component
function Create() {

    // Create state variables for title, year, and poster
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, year, poster);

    }

    // Render the form for adding a new movie, including input fields for title, year, and poster, and a submit button
    return (
        <div>
            <h1>Hello World! from Create component</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <textarea type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div>
                <input type="submit" value="Add Movie" />
            </form>

        </div>
    )
}

// Export the Create component for use in other files
export default Create
