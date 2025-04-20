import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Templates/Snippets/MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css';


const Movies = () => {

  const[searchMovieName,SetSearchMovieName] = useState('');
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
          SetMovieData([]); 
        }
      })
      .catch(error => {
        console.log(error);
        SetMovieData([]);
      });
  };
  

    return (
    <>
      <div >
        <form onSubmit={e=>e.preventDefault()}>
        <div className="d-flex justify-content-center align-items-center mt-5">
            <input 
              className="mt-3" 
              type="text" 
              onInput={e => SetSearchMovieName(e.currentTarget.value)} 
              placeholder="Search for a movie"
            />
            <button 
              className="mt-3 " 
              onClick={buttonClick} 
              type="button"
            >
              Search for movie
            </button>
          </div>


          <MovieCard movies={MovieData} />
        </form>
      </div>    
    </>
    );
  };
  

export default Movies;