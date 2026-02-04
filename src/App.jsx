import { useEffect, useState } from 'react';
import MovieCard from './MovieCard.jsx';
function App() {
  
  const [movies, setMovies] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const apiKey = import.meta.env.VITE_API_KEY;
  const endpoint = 'https://api.themoviedb.org/3/movie/popular';
  useEffect(() => {
    const timer = setTimeout(() => {
    let url;
    if (busqueda === '') {
      url = `${endpoint}?api_key=${apiKey}&language=es-MX&page=1`;
    } 
    else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-MX&query=${busqueda}`;
      }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
    }, 500); // Retraso de 500 ms
    return () => clearTimeout(timer); // Limpiar el temporizador al cambiar la búsqueda
  }, [busqueda]);

  return (
    <div className='app'>
      <header className='header'>
        <h1 className='title'>MovieApp</h1> 
        <input type="text" className='search-bar' placeholder="¿Que quieres ver hoy?" value={busqueda} 
        onChange={(e) => setBusqueda(e.target.value)} /> 
      </header>

      <div className="movie-container">
      {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />))}
    </div>
    </div>
  );
}
export default App;