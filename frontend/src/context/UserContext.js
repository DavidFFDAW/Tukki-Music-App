import React,{useEffect, useState} from 'react';

const Context = React.createContext({});

export function UserContextProvider({ children }){

    const [user, setUser] = useState({
        name: 'name',
        type: 'artist',
        img: '',
    });
    const [jwt, setJWT] = useState(
        () => window.sessionStorage.getItem('jwt')
    );

    return (<Context.Provider value={{ 
        jwt, setJWT,
        user, setUser
    }}>
        { children }
    </Context.Provider>);
}

export default Context;