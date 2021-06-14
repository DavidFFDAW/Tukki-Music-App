import { useContext, useCallback } from 'react';
import Context from './../context/UserContext';
import attemptLogIn from '../services/loginService';
import attemptRegister from '../services/registerService';
import SessionStorageService from '../services/session.storage.service';
import HttpService from '../services/http.service';


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
      attemptRegister(credentials).then(jwt => {
          SessionStorageService.addToken(jwt);
          setJWT(jwt);
      })
    },[setJWT]);

    const setCurrentUser = useCallback(async _ => {
        const { user } = await HttpService.get('http://192.168.1.56:8350/api/user') 
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
