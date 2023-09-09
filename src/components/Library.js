import React from "react";
import LibrarySong from "./LibrarySong";


const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSong}) => {
    return(
        <div className="library"> 
            <h2>Library</h2>
                <div className="library-songs">
                 {songs.map((song) => (<LibrarySong  setCurrentSong={setCurrentSong} 
                                                        songs={songs} 
                                                        song={song} 
                                                        id={song.id} 
                                                        key={song.id} 
                                                        audioRef={audioRef}
                                                        isPlaying={isPlaying}
                                                        setSong={setSong} />))}
                </div>
        </div>
    )
    }

    export default Library;