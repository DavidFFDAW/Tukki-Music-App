import React,{ useState } from 'react';

const SongContext = React.createContext({});

export function SongContextProvider({ children }){
    const [songPlaying, setSongPlaying] = useState([]);

    return (<SongContext.Provider value={{ songPlaying, setSongPlaying }}>
        { children }
    </SongContext.Provider>);
}

export default SongContext;