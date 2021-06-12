import React,{ useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import useUser from '../../hooks/useUser';
import './styles.css';


export default function LogIn({ onLogin }){

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [, navigate] = useLocation();
    const { login, isLogged } = useUser();

    useEffect(_ => {
        if (isLogged){
            navigate('/');
            onLogin && onLogin();
        }
    },[isLogged, navigate, onLogin]);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        login({ username, password });
    }

    return (
        <div className="flex flex-center">

        <div className="box">
            <div className="rounded-box">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="inner-box">
                        <div className="flex flex-space-btw">
                            <div className="color-block"><img src="http://localhost:3500/tukki.png"/></div>
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
                                    <Link type="button" className="btn btn-transparent" href="/register">Registrarme</Link>
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
        </div>

    )
}
