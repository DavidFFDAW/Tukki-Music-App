import { useContext, useCallback } from 'react';
import { useLocation } from 'wouter';
import Context from './../context/UserContext';
import loginService from '../services/loginService';
import { Data } from '../data-faker';


export default function useUser(){
    
    const {jwt, setJWT} = useContext(Context);
    const { user, setUser } = useContext(Context)
    const [, navigate] = useLocation();

    const login = useCallback(({ username, password }) => {
        const logged = loginService({ username, password })
        if(!logged) navigate('/login');
        if(logged){
            setUser({ username, avatar: Data.user.avatar });
            setJWT(logged);
        }
    }, [setJWT]);

    const logout = useCallback(() => {
        setJWT(null);
    },[]);

    return {
        isLoggedIn: Boolean(jwt),
        login,
        logout,
        user
    };
}