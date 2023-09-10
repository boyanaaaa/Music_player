import './styles/app.scss'
import React, { useState, useRef } from "react";
import Song from './components/Song'
import Player from './components/Player'
import data from './util'
import Library from './components/Library';
import Nav from './components/Nav';





function App() {

const [songs, setSong] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);
const audioRef = useRef(null);
const [songInfo,setSongInfo] = useState({
  currentTime: 0,
  duration: 0,
})
const [libraryStatus,setLibraryStatus] = useState(false);
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo, currentTime: current, duration});
}

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}  />
      <Player audioRef={audioRef} 
              setIsPlaying={setIsPlaying} 
              isPlaying={isPlaying} 
              currentSong={currentSong} 
              songInfo={songInfo} 
              setSongInfo={setSongInfo}
              songs={songs}
              setCurrentSong={setCurrentSong} />
      <Library audioRef={audioRef} 
              songs={songs} 
              setCurrentSong={setCurrentSong} 
              isPlaying={isPlaying}
              setSong={setSong} 
              libraryStatus = {libraryStatus}/>
      <audio ref={audioRef} src={currentSong.audio} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler}></audio>

    </div>
  );
}

export default App;
