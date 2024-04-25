import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import MovieItem from './MovieItem';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <Form>
        <Form.Group controlId="formBasicQuery">
          <Form.Label>Search for a movie</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie title"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>
      <div>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;