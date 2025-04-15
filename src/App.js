
import Movies from './components/movies';


 


//http://www.omdbapi.com/t=terminator&apikey=6648c884
console.log(process.env.REACT_APP_OMDBAPI_KEY,process.env.REACT_APP_OMDBAPI_URL);







function App() {
  return (
    <>

    <Movies />


    </>

   
  );
}

export default App;
