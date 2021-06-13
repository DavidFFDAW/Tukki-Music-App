import React,{ useState } from 'react';

const SongContext = React.createContext({});

export function SongContextProvider({ children }){
    const [songPlaying, setSongPlaying] = useState([
        'http://localhost:3500/songs/rollins.mp3',
        'http://localhost:3500/songs/cesaro.mp3',
        'http://localhost:3500/songs/bianca.mp3',
    ]);

    return (<SongContext.Provider value={{ songPlaying, setSongPlaying }}>
        { children }
    </SongContext.Provider>);
}

export default SongContext;