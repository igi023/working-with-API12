import React from 'react';
import Navigation from './Templates/Snippets/Navigation';
import Movies from './components/movies';
import Footer from './Templates/Snippets/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
