import React,{ useState } from 'react';

const Context = React.createContext({});

export function UserContextProvider({ children }){

    const [user, setUser] = useState({
        name: 'UserName',
        img: null,
        type: 'normal',
        petition_status: 'pending',
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