// components/Snippets/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "fallback.jpg"}
          alt={movie.Title}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
