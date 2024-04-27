import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './results.css'; 

const MovieItem = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="movie-item" onClick={handleShowModal}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <h3 className='title'>{movie.title}</h3>
      </div>
      
    </>
  );
};

export default MovieItem;
