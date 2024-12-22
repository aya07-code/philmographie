import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import FilmographieBody from './components/FilmographieBody'
import movies from './Data/movies';

const App = () => {
  
  return (
    <div className='app'>
      <Header/>
      <FilmographieBody/>
      <Footer/>
    </div>
  );
};

export default App;
