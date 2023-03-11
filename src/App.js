import logo from './logo.svg';
import './App.css';
import spotifyLogo from './spotify-logo.png'
import { useState } from 'react';

function App() {
  const buttonOnClick = () => {
    const url = "https://open.spotify.com/track/54YY9VsZn8sbwXht0VAKZB?si=TX90XiuLSXGqgt3xs5gxug&app_destination=copy-link"
    window.open(url)
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
