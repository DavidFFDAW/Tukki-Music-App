import React,{useState} from 'react';
import { user } from '../data-faker';
import { Data } from '../data-faker';

const Context = React.createContext({});

export function UserContextProvider({ children }){
    const [jwt, setJWT] = useState([]);
    const [user, setUser] = useState(Data.user);

    return (<Context.Provider value={{ jwt,setJWT,user,setUser }}>
        { children }
    </Context.Provider>);
}

export default Context;