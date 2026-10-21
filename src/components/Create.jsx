// create.js
// Import useState so we can store and update form values
import { useState } from "react";

function Create() {

  // State variables for the movie title, year and poster
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // This function runs when the form is submitted
  const handleSubmit = (e) => {

    // Prevent the page from refreshing
    e.preventDefault();

    // Display the entered values in the console

    console.log(title, year, poster);
  }

  return (
    <div>

      {/* Heading for the Create component */}
      <h2>This is my Create Component.</h2>

      {/* Form for entering movie details */}
      <form onSubmit={handleSubmit}>

        {/* Movie title input */}
        <div className="form-group">
          <label>Add Movie Title: </label>

          <input
            type="text"
            className="form-control"

            // Display the current title value
            value={title}

            // Update title when the user types
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>

        {/* Movie year input */}
        <div className="form-group">
          <label>Add Movie Year: </label>

          <input
            type="text"
            className="form-control"

            // Display the current year value
            value={year}

            // Update year when the user types
            onChange={(e) => {
              setYear(e.target.value)
            }}
          />
        </div>

        {/* Movie poster input */}
        <div className="form-group">
          <label>Add Movie Poster: </label>

          <input
            type="text"
            className="form-control"

            // Display the current poster value
            value={poster}

            // Update poster when the user types
            onChange={(e) => {
              setPoster(e.target.value)
            }}
          />
        </div>

        {/* Submit button */}
        <input type="submit" value="Add Movie" />

      </form>
    </div>
  );
}

// Export the Create component
export default Create;
