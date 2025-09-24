import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie, i) => (
        <MovieCard key={"movie" + i} movie={movie} />
      ))}
      
    </div>
  );
}

export default MovieList;