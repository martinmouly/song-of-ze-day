import logo from './logo.svg';
import './App.css';
import spotifyLogo from './spotify-logo.png'
import { useState } from 'react';

function App() {
  const buttonOnClick = () => {
  }
  return (
    <div className="App">
      <button className='button-5' onClick={buttonOnClick}>
        <img src={spotifyLogo} className="spotify-logo"/>
        Song of the day
      </button>
    </div>
  );
}

export default App;
