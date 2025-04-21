import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from "../Templates/SearchResults";


const Search = () => {
  const [searchMovieName, setSearchMovieName] = useState("");
  const [movieData, setMovieData] = useState([]);

  const buttonClick = () => {
    Promise.all([
      axios.get(`${process.env.REACT_APP_OMDBAPI_URL}?s=${searchMovieName}&type=movie&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`),
      axios.get(`${process.env.REACT_APP_OMDBAPI_URL}?s=${searchMovieName}&type=series&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`)
    ])
    .then(([moviesResponse, seriesResponse]) => {
      const movieResults = moviesResponse.data.Search || [];
      const seriesResults = seriesResponse.data.Search || [];
      const combined = [...movieResults, ...seriesResults];
      setMovieData(combined);
    })
    .catch((error) => {
      console.log(error);
      setMovieData([]);
    })
    
      .catch((error) => {
        console.log(error);
        setMovieData([]);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <input
            className="mt-3 me-2"
            type="text"
            value={searchMovieName}
            onChange={(e) => setSearchMovieName(e.target.value)}
            placeholder="Search for a movie"
          />
          <button
            className="mt-3 btn btn-primary"
            onClick={buttonClick}
            type="button"
          >
            Search for movie
          </button>
        </div>
      </form>

      
      <SearchResults movies={movieData} />
    </div>
  );
};

export default Search;
