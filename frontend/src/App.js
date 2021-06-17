import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ROUTES from './constants/routes';

import Spinner from './components/Spinner'
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import MusicPlayer from './components/MusicPlayer/Player';

import HomePage from './pages/HomePage';
import PlaylistPage from './pages/PlaylistPage';
import ArtistMenuPage from './pages/ArtistMenuPage';
import ArtistAlbums from './pages/ArtistAlbums';
import ArtistSongs from './pages/ArtistSongs';
import ArtistSongUpload from './pages/ArtistSongUpload';
import ArtistAlbumCreation from './pages/ArtistAlbumCreation';
import MixCreation from './pages/MixCreation';
import SearchPage from './pages/SearchPage';

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
          <Router>
            <Switch>
              <SongContextProvider>
                <Route path='/' exact>
                  <LogIn></LogIn>
                </Route>
                <Route path={ ROUTES.login } exact>
                  <LogIn></LogIn>
                </Route>
                <Route path={ ROUTES.register } exact>
                  <Register></Register>
                </Route>
                <Route path="/user">
                  <Header></Header>
                  <Switch>
                    <Route path={ ROUTES.home } exact>
                      <HomePage />
                    </Route>
                    <Route path={ ROUTES.mixCreate } exact>
                      <MixCreation/>
                    </Route>
                    <Route path={ ROUTES.playlist } exact>
                      <PlaylistPage />
                    </Route>
                    <Route path={ ROUTES.artistmenu } exact>
                      <ArtistMenuPage />
                    </Route>
                    <Route path={ `${ROUTES.search}` } exact>
                      <SearchPage />
                    </Route>
                    <Route path={ ROUTES.artistAlbums } exact>
                      <ArtistAlbums />
                    </Route>
                    <Route path={ ROUTES.artistSongs } exact >
                      <ArtistSongs />
                    </Route>
                    <Route path={ ROUTES.albumCreate } exact>
                      <ArtistAlbumCreation />
                    </Route>
                    <Route path={ ROUTES.songUpload } exact>
                      <ArtistSongUpload />
                    </Route>
                  </Switch>
                  <MusicPlayer width="100%"></MusicPlayer>
                </Route>
              </SongContextProvider>
            </Switch>
          </Router>
        </Suspense>
      </UserContextProvider>
  );
}
export default App;
