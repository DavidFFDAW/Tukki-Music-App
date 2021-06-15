import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ColorModeButton from './LightDarkMode';
import useUser from '../../hooks/useUser';
import routes from '../../constants/routes';
import { Link, useHistory } from 'react-router-dom';
import Spinner from '../Spinner';
import './header.css';

export default function Header(){
    const history = useHistory();
    const colorTheme = localStorage.getItem('themePreference');
    const [isDarkMode,setDarkMode] = useState(colorTheme === 'dark');
    const [loading, setLoading] = useState(false);
    const { user, setCurrentUser, logout } = useUser();

    useEffect(_ => {
        setLoading(true);
        setCurrentUser().then(_ => {
            setLoading(false);
        });
    },[])

    const styles = {
        backgroundUrl: `url(${ user.image ? user.image : 'http://localhost:300/user.png'})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const handleLogout = _ => {
        logout();
        history.push('/login');
    }

    const saveThemePreference = _ => {
        const savedPreference = localStorage.getItem('themePreference');
        const themePreference = savedPreference === 'dark' ? 'light' : 'dark';
        localStorage.setItem('themePreference', themePreference);
    }

    const handleDarkMode = _ => {
        setDarkMode(!isDarkMode);
        document.body.classList.toggle('dark');
        saveThemePreference();
    }    

    return (
        <div className="flex flex-space-btw fixed head-bg">
            <div className="head-first">
                <form className="flex flex-center search-form">
                    <input type="text" className="search-input" placeholder="Introduce un nombre..."/>
                    <button type="submit" className="search-button"><SearchIcon/></button>
                </form>
            </div>
            <div>
                <Link to={ routes.home } className="btn btn-router">Inicio</Link>
                { user.type === 'artist' 
                    ? <Link to={ routes.artistmenu } className="btn btn-router">Menu Artista</Link>
                    : ''
                }
                
            </div>
                    { loading && <Spinner/> }
            <div className="flex flex-center user">
                    <img className="user-img" src={ user.img || 'http://localhost:3000/user.png'}></img>
                    <span>{ user.name }</span>
                    <div className="user-options">
                        <ColorModeButton isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
                        <button className="link" onClick={ handleLogout }>Cerrar Sesión</button>
                    </div>
            </div>
        </div>
    )
}