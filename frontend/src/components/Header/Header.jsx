import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ColorModeButton from './LightDarkMode';
import useUser from '../../hooks/useUser';
import './header.css';

export default function Header(){
    const colorTheme = localStorage.getItem('themePreference');
    const [isDarkMode,setDarkMode] = useState(colorTheme === 'dark');
    const { user } = useUser();

    const styles = {
        backgroundImage: `url(${ user.avatar })`,
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
            <div className="flex flex-center user">
                <div className="user-img" style={styles}></div>
                <span>{ user.name }</span>
                <div className="user-options">
                    <ColorModeButton isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
                    <button className="link">Cerrar Sesión</button>
                </div>
            </div>
        </div>
    )
}