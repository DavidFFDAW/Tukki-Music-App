import React,{ useState } from 'react';

const SongContext = React.createContext({});

export function SongContextProvider({ children }){
    const [ currentMix, setCurrentMix ] = useState([]);
    const [ tukkiMixes, setTukkiMixes ] = useState([]);

    return (<SongContext.Provider value={{ currentMix, setCurrentMix,
        tukkiMixes, setTukkiMixes
    }}>
        { children }
    </SongContext.Provider>);
}

export default SongContext;