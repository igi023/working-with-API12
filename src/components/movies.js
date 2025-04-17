import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Templates/Snippets";




const Movies = () => {

  const[searchMovieName,SetSearchMovieName] = useState('Harry potter');
  const[MovieData,SetMovieData] =useState([]);


  const buttonClick = () => {
    axios
      .get(`${process.env.REACT_APP_OMDBAPI_URL}?s=${searchMovieName}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`)
      .then(response => {
        const results = response.data.Search;
  
        if (results) {
          const filtered = results.filter(movie =>
            movie.Title.toLowerCase().includes(searchMovieName.toLowerCase())
          );
          SetMovieData(filtered);
        } else {
          SetMovieData([]); // Ako nema rezultata
        }
      })
      .catch(error => {
        console.log(error);
        SetMovieData([]);
      });
  };
  

    return (
      <>
      <form onSubmit={e=>e.preventDefault}>
        <input type="text" onInput={e =>SetSearchMovieName(e.currentTarget.value)} />
        <button onClick={buttonClick} type="button">Search for movie</button>

        <MovieCard movies={MovieData} />
      </form>  
      </>
    );
  };
  

export default Movies;