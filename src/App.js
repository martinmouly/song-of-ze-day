import './App.css';
import spotifyLogo from './spotify-logo.png'
import { useEffect, useState } from 'react';
import tracks from './song_data/selected_track.json';

function App() {
  const songUrl = tracks.url
  const buttonOnClick = () => {
    window.open(songUrl)
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
