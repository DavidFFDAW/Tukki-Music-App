import { useEffect } from 'react';
import { useLocation } from 'wouter';
import useUser from '../hooks/useUser';

function useUserAuth(){
    const { isLogged } = useUser();
    const [, navigate] = useLocation();

    useEffect(_ => {
        if(!isLogged) navigate('/admin/login');
    });
}

export default useUserAuth;