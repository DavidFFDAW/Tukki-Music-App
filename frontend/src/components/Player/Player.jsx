import React, { useState, useContext } from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import './musicplayer.css';
import SongContext from '../../context/SongContext';

export default function MusicPlayer({ width }){

    const style = { width: width || 'calc( 100% - 250px )' };

    const [isPlaying, setPlaying] = useState(false);
    const { getPlayingSong } = useContext(SongContext);
    // obtain an array of musics

    return (
        <div className="player" style={style}>
            <div className="flex flex-center controls">
                <SkipPreviousIcon/>
                <PlayCircleFilledIcon></PlayCircleFilledIcon>
                <SkipNextIcon/>
            </div>
            <div className="flex flex-center">
                <progress value="15" max="20"></progress>
            </div>
            <audio className="disp:none" src=""/* getPlayingSong() */></audio>
        </div>
    );

};