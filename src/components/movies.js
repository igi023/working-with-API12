import React, { useState } from "react";
import axios from "axios";




const Movies = () => {

  const[searchMovieName,SetSearchMovieName] = useState();


    const buttonClick = () => {
    axios.get(process.env.REACT_APP_OMDBAPI_URL+"?t="+searchMovieName+"&apikey="+process.env.REACT_APP_OMDBAPI_KEY)

    .then(response => console.log(response.data))
    .catch(error => {console.log(error)})


    };
  

    return (
      <>
        <input type="text" onInput={e =>SetSearchMovieName(e.currentTarget.value)} />
        <button onClick={buttonClick} type="button">Search for movie</button>
      </>
    );
  };
  

export default Movies;