import { imagenNoDisponible } from "./resources";
function MovieCard({ movie }) {
  
  return (
    <div className="movie-card">
        <h3>{movie.title}</h3>
        <img src=
        {movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
        : imagenNoDisponible} alt={movie.title} />
        <p>Fecha de lanzamiento: {movie.release_date}</p>
        <p>Calificación: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</p>
    </div>
  );
}

export default MovieCard;