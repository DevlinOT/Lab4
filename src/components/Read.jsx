//Read.js
//Import the Movies component
import Movies from "./movies";

//Import React hooks
import { useEffect, useState } from "react";

// Import axios for getting data from an external URL
import axios from "axios";

function Read() {

  //Create a state variable to store the movies
  //myMovies holds the data and setMovies updates it
  const [myMovies, setMovies] = useState([]);

  //useEffect runs when the component first loads
  useEffect(() => {

    //Get the movie data from the external JSON file
    axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json')

      //if the request is successful
      .then((response) => {
        setMovies(response.data.myArray);
      })

      // If there is an error, print it to the console
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty array means this runs only once when the page loads

  return (
    <div>
      {/* Display the Read component heading */}
      <h2>This is my Read Component.</h2>

      {/* Pass the movie data to the Movies component using props */}
      <Movies movies={myMovies} />
    </div>
  );
}

export default Read;
