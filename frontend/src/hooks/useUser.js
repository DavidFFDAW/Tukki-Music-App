import { useContext, useCallback } from 'react';
import Context from './../context/UserContext';
import { attemptLogIn, attemptRegisterUser, getCurrentUser } from '../services/user.service';
import SessionStorageService from '../services/session.storage.service';


export default function useUser(){

    const { jwt, setJWT, user, setUser } = useContext(Context);

    const login = useCallback( ({ username, password }) => {
        attemptLogIn({username, password})
            .then(jwt => {
                if(!jwt) return;
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

    const register = useCallback( credentials => {
      if(credentials.password !== credentials.repeatPassword){
        alert('Las contraseñas no coinciden');
        return;
      }
      attemptRegisterUser(credentials).then(jwt => {
          SessionStorageService.addToken(jwt);
          setJWT(jwt);
      })
    },[setJWT]);

    const setCurrentUser = useCallback(user => {
        setUser(user);
        
    },[setUser]);

    return {
        isLogged: Boolean(jwt),
        login,
        logout,
        register,
        setCurrentUser,
        user,
    }
}
