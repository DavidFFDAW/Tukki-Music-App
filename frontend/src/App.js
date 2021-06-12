import React, { Suspense } from 'react';
import { Route, Switch } from 'wouter';
import ROUTES from './constants/routes';

import Spinner from './components/Spinner'
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import HomePage from './pages/HomePage';
import PlaylistPage from './pages/PlaylistPage';
import ArtistMenuPage from './pages/ArtistMenuPage';

import { UserContextProvider } from './context/UserContext';
import { SongContextProvider } from './context/SongContext';
import './App.css';

function App() {

  const savedThemeColor = localStorage.getItem('themePreference');

  if (savedThemeColor) {
    const colorTheme = savedThemeColor || 'light';
    document.body.classList.add(colorTheme);
  }

  return (
      <UserContextProvider>
        <Suspense fallback={<Spinner/>}>
          <Switch>
            <SongContextProvider>
              <Route path={ ROUTES.login } component={ LogIn }/>
              <Route path={ ROUTES.register } component={ Register }/>

              <Route path={ ROUTES.home } component={ HomePage }></Route>
              <Route path={ ROUTES.playlist } component={ PlaylistPage }></Route>
              <Route path={ ROUTES.artistmenu } component={ ArtistMenuPage }></Route>
            </SongContextProvider>
          </Switch>
        </Suspense>
      </UserContextProvider>
  );
}
export default App;
