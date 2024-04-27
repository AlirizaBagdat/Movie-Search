import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieItem from '../MovieItems/movieItem';
import 'bootstrap/dist/css/bootstrap.min.css'
import { fetchMovies } from '../utils/utils';
import NavBar from './navbar';

const SearchPage = () => {
    // const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
   
    const handleSearch = async (query) => {
      try {
        const results = await fetchMovies(query);
        setMovies(results);
      } catch (error) {
        console.error(error)
      }
    };
   

  return (
    <div>
      <NavBar onSearch={handleSearch} />
      <div className='movie-grid'>
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieItem key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  )
};

export default SearchPage;