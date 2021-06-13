import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ColorModeButton from './LightDarkMode';
import useUser from '../../hooks/useUser';
import routes from '../../constants/routes';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header(){
    const colorTheme = localStorage.getItem('themePreference');
    const [isDarkMode,setDarkMode] = useState(colorTheme === 'dark');
    const { user } = useUser();

    const styles = {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
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
                <Link to={ routes.artistmenu } className="btn btn-router">Menu Artista</Link>
            </div>
            <div className="flex flex-center user">
                    <div className="user-img" style={styles}></div>
                    <span>Username</span>
                    <div className="user-options">
                        <ColorModeButton isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
                        <button className="link">Cerrar Sesión</button>
                    </div>
            </div>
        </div>
    )
}