import React, { useState, useContext, useRef } from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import useSong from '../../hooks/useSongPlaying';
import './musicplayer.css';

export default function MusicPlayer({ width }){
    const audio = useRef(null);
    const progressBar = useRef(null);
    const { getPlayingSong, setPlayingSong } = useSong();

    const style = { width: width || 'calc( 100% - 250px )' };
    const [isPlaying, setPlaying] = useState(false);
    // obtain an array of musics

    const handleProgressBarClick = ev => {
        //audio.current.pause();
        const x = ev.pageX - progressBar.current.offsetLeft;
        const clickedValue = x * progressBar.current.max / progressBar.current.offsetWidth;
        audio.current.currentTime = clickedValue;
        console.log(clickedValue);
        progressBar.current.value = clickedValue;
        // audio.current.play();
    }

    const handleAudioCanPlay = ev => {
        progressBar.current.max = audio.current.duration;
    }

    const handleTimeUpdate = ev => {
        progressBar.current.value = audio.current.currentTime;
    }

    const handlePlay = ev => {
        audio.current.play();
        setPlaying(true);
    }

    const handleStop = _ => {
        audio.current.pause();
        setPlaying(false);
    }

    const handleSongSkipped = _ => {
            audio.current.pause();
            setPlaying(false);
            audio.current.dataset.current = +audio.current.dataset.current + 1;
            const nextSong = +audio.current.dataset.current + 1;
            audio.current.src = getPlayingSong()[nextSong];
    }

    const handleAudioLoad = _ => {
        audio.current.play();
        setPlaying(true);
    }


    return (
        <div className="player" style={style}>
            <div className="flex flex-center controls">
                <SkipPreviousIcon/>
                { isPlaying ? <PauseCircleFilledIcon onClick={handleStop}/> : <PlayCircleFilledIcon onClick={ handlePlay }/> }
                <SkipNextIcon onClick={ handleSongSkipped }/>
            </div>
            <div className="flex flex-center">
                <progress value="0" max="0" ref={progressBar} onClick={ handleProgressBarClick }></progress>
            </div>
            <audio className="disp:none" onLoad={ handleAudioLoad } src="" data-current="0" ref={ audio } onTimeUpdate={ handleTimeUpdate } onCanPlay={ handleAudioCanPlay } autoPlay></audio>
        </div>
    );

};