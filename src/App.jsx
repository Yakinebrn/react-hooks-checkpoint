import { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

function App() {
  

  const [movies, setMovies] = useState([
    {
      
  title: "John Wick",
  description:
    "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
  posterURL:
    "https://fr.web.img2.acsta.net/c_310_420/pictures/14/10/08/11/49/255061.jpg",
  rating: 4.6,
},
{
  title: "The Conjuring 2",
  description:
    "Ed and Lorraine Warren travel to London to help a single mother and her four children plagued by malicious spirits.",
  posterURL:
    "https://www.tallengestore.com/cdn/shop/products/TheConjuring2-HollywoodEnglishHorrorMoviePoster_c8d4b4d6-c805-47eb-bbdf-498a41e5bcf2.jpg?v=1625220797",
  rating: 4.2,
},

  ]);

  
  const [searchTitle, setSearchTitle] = useState(""); 
  const [searchRating, setSearchRating] = useState(0); 
  const [isModalOpen, setIsModalOpen] = useState(false); 


  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]); 
  };

  
  const filteredMovies = movies.filter((movie) => {
    const titleMatch =
      searchTitle === "" || 
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()); 

    const ratingMatch =
      searchRating === 0 || 
      Math.floor(movie.rating) === Math.floor(searchRating); 

    return titleMatch && ratingMatch; 
  });

  return (
    <div className="app">
      <h1>Movie App 🎥</h1>

      
      <Filter
        setSearchTitle={setSearchTitle}
        setSearchRating={setSearchRating}
      />

      {/* Button to open the "Add Movie" modal */}
      <button onClick={() => setIsModalOpen(true)}>Add Movie</button>

      {/* Modal component for adding a new movie */}
      <AddMovie isOpen={isModalOpen} addMovie={addMovie} />

      {/* Display the filtered list of movies */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
