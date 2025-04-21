
import React from 'react';
import MovieCard from './Snippets/MovieCard';

const SearchResults = ({ movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="row mt-3 px-4">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default SearchResults;
