import React,{ useState } from 'react';

const SongContext = React.createContext({});

export function SongContextProvider({ children }){
    const [ currentSong, setCurrentSong ] = useState('');
    const [ tukkiMixes, setTukkiMixes ] = useState([]);

    return (<SongContext.Provider value={{ currentSong, setCurrentSong,
        tukkiMixes, setTukkiMixes
    }}>
        { children }
    </SongContext.Provider>);
}

export default SongContext;