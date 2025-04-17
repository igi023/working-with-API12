import React from 'react';

const MovieCard = ({ movies }) => {
    return (
      <>
        {movies.map((movie, index) => (
          <div key={index}>
            <img src={movie.Poster !== "N/A" ? movie.Poster : "fallback.jpg"} alt={movie.Title} />
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
          </div>
        ))}
      </>
    );
  };
    
 export default MovieCard; 