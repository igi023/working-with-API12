import React from 'react';
import Navigation from './Templates/Snippets/Navigation';
import Footer from './Templates/Snippets/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
