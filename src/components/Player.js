import React, { useRef } from 'react';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Player = ({ currentSong, isPlaying, setIsPlaying }) => {

    const audioRef = useRef(null);
    const playSongHandler = () => {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(!isPlaying);
        } else {
          audioRef.current.play();
          setIsPlaying(!isPlaying);
        }
      };

    return(
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon className="skipback" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon className="play" size="2x" icon={faPlay} onClick={playSongHandler}/>
                <FontAwesomeIcon className="skipforward" size="2x" icon={faAngleRight} />
            </div>

            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}


export default Player;