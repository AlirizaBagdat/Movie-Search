import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div>
      <h3>{movie.original_title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.original_title}
      />
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieItem;
