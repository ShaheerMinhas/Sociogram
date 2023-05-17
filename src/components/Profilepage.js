import React from 'react'
import Sidebar1 from "./Sidebar1"
import ReactDOM from 'react-dom';
import SpotifyPlayer from './Spotify';
function Profilepage() {
  return (
    <>
    ReactDOM.render(
      <div className="player">
      <SpotifyPlayer uri="spotify:artist:3atMq790wQ7IqjeSO0HFeP" size={{width: 300, height: 500}} them="black" view="list" />
      </div>
  
);

    <Sidebar1 current="profile"/>
    <h1>Twit is best</h1>
    </>
  )
}

export default Profilepage
