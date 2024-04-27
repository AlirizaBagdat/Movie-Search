import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './Search/navbar';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '1cece4418167d7edc50a16dc5aef363a';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchMovieDetails();

    // Cleanup function
    return () => {
      setMovie(null); // Clear movie details when unmounting
    };
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render movie details here */}
      <NavBar />
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieDetails;




