import React,{ useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import useUser from '../../hooks/useUser';
import './styles.css';


export default function LogIn(){

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [, navigate] = useLocation();
    const { login, isLoggedIn } = useUser();

    /* useEffect(_ => {
        if(isLoggedIn) navigate('/home');
    },[isLoggedIn,navigate]) */

    const handleSubmit = (ev) => {
        ev.preventDefault();
        login({username,password});
    }

    return (
        <div className="box">
            <div className="rounded-box">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="inner-box">
                        <div className="flex flex-space-btw">
                            <div className="color-block"><img src="http://localhost:3000/tukki.png"/></div>
                            <div className="content">                                                        
                                <p>Miles de playlists te esperan.<br/> 
                                Inicia sesión o crea una cuenta para empezar a disfrutar
                                </p>
                                
                                <div>
                                    <label>Correo o Username:</label>
                                    <input type="text" autoComplete="current-password" onChange={ (ev) => setUsername(ev.target.value) } value={username}/>
                                </div>
                                <div>
                                    <label>Contraseña:</label>
                                    <input type="password" onChange={ (ev) => setPassword(ev.target.value)} value={password}/>
                                </div>
                                <div className="flex flex-space-btw btn-div">
                                    <button type="button" className="btn btn-transparent">Registrarme</button>
                                    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                                </div>
                                <div className="flex flex-center">
                                    <a>He olvidado mi contraseña</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}