import './App.css';
import spotifyLogo from './spotify-logo.png'
import axios from 'axios'
import { useLayoutEffect } from 'react';

function App() {
  
  const url = "https://open.spotify.com/track/08l9WKDuRyGeStQ9ojTlFh?si=6dccc228655d4a8a"

  useLayoutEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
      console.log(res.data)
    }
    
    console.log("NEW USER")
    getData()
  }, []);

  const buttonOnClick = () => {
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
