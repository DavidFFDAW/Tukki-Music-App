import React from 'react';
import { Route, Link, useLocation } from 'wouter';
import LogIn from './components/LogIn/login.jsx';
import { UserContextProvider } from './context/UserContext';
import useUser from './hooks/useUser.js';
import HomePage from './pages/HomePage.jsx';
import Playlist from './components/Playlist';
import './App.css';

function App() {
  const savedThemeColor = localStorage.getItem('themePreference');
  if (savedThemeColor) {
    const colorTheme = savedThemeColor === 'dark' ? 'dark' : 'light';
    document.body.classList.add(colorTheme);
  }
  
  return (
    <React.StrictMode>
      <UserContextProvider>
        <Route name="/login" path="/login" component={ LogIn }/>
        <Route name="/home" path="/home" component={ HomePage }></Route>
        <Route name="/dashboard" path="/playlist/:id" component={ Playlist }></Route>
      </UserContextProvider>
    </React.StrictMode>
  );
}
export default App;