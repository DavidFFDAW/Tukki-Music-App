import { useContext, useCallback } from 'react';
import SongContext from '../context/SongContext';


export default function useUser(){
    
    const { songPlaying, setSongPlaying } = useContext(SongContext);

    const setPlaying = useCallback(({ song }) => {
        setSongPlaying(song);
    },[songPlaying]);

    const getPlayingSong = useCallback(_ => {
        return songPlaying;
    },[setPlaying]);

    return {
        setPlaying,
        getPlayingSong,
    };
}