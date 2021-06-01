import React, { useContext, useCallback } from 'react';
import Context from 'context/UserContext';


export default function useUser(){
    const {jwt, setJWT} = useContext(Context);

    const login = useCallback(() => {
        setJWT();
    }, [setJWT]);

    return {
        isLoggedIn: Boolean(jwt),
        login
    };
}