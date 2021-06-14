import  { useContext, useCallback } from 'react';
import Context from 'context/UserContext';
import attemptLogIn from '../services/loginService';
import SessionStorageService from '../services/session.storage.service';


export default function useUser(){
    const { jwt, setJWT } = useContext(Context);

    const login = useCallback( ({ username, password }) => {
        attemptLogIn({username, password})
            .then(jwt => {
                if(!jwt || jwt === '') return;
                SessionStorageService.addToken(jwt);
                setJWT(jwt);
            })
            .catch(err => {
                SessionStorageService.removeToken();
                console.error(err);
            });
    }, [setJWT]);

    const logout = useCallback( () => {
        SessionStorageService.removeToken('jwt');
        setJWT(null);
    }, [setJWT]);

    return {
        isLoggedIn: Boolean(jwt),
        login,
        logout,
    };
}