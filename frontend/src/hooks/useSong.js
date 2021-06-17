import { useContext, useCallback } from 'react';
import SongContext from '../context/SongContext';


export default function useUser(){
    
    const { currentSong, setCurrentSong } = useContext(SongContext);

    const setPlayingSong = useCallback((song) => {
        setCurrentSong(song);
    },[setCurrentSong]);

    const getPlayingSong = useCallback(_ => {
        return currentSong;
    },[currentSong,setCurrentSong]);

    return {
        setPlayingSong,
        getPlayingSong,
    };
}