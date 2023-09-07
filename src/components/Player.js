import React, { useRef, useState } from 'react';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Player = ({ currentSong, isPlaying, setIsPlaying }) => {

    const [songInfo,setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration});
    }
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }


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
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler} />
                <p>{getTime(songInfo.duration)}</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon className="skipback" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon className="play" size="2x" icon={isPlaying ? faPause : faPlay} onClick={playSongHandler}/>
                <FontAwesomeIcon className="skipforward" size="2x" icon={faAngleRight} />
            </div>

            <audio ref={audioRef} src={currentSong.audio} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler}></audio>
        </div>
    )
}


export default Player;