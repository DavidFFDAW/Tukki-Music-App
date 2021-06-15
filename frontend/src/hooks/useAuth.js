import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from '../hooks/useUser';

function useUserAuth(){
    const { isLogged } = useUser();
    const history = useHistory();

    useEffect(_ => {
        if(!isLogged) history.push('/login');
    },[])

}

export default useUserAuth;