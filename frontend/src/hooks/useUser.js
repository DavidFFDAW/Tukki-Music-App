import { useContext, useCallback } from 'react';
import Context from './../context/UserContext';
import attemptLogIn from '../services/loginService';
import attemptRegister from '../services/registerService';
import SessionStorageService from '../services/session.storage.service';


export default function useUser(){

    const { jwt, setJWT } = useContext(Context);

    const login = useCallback( ({ username, password }) => {
        attemptLogIn({username, password})
            .then(jwt => {
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
      attemptRegister(credentials).then(jwt => {
          SessionStorageService.addToken(jwt);
          setJWT(jwt);
      })
    },[setJWT]);

    return {
        isLogged: Boolean(jwt),
        login,
        logout,
        register,
    }
}
