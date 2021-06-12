import React from 'react';
import Header from '../components/Header/Header';
import PlaylistSidenav from '../components/SidenavPlaylist/PlaylistSidenav';
import Main from '../components/Main/Main';
import PlaylistsCards from '../components/PlaylistsCards/PlaylistsCards';
import MusicPlayer from '../components/Player/Player';
import checkAuth from '../hooks/useAuth';

export default function HomePage(){
    checkAuth();

    return(
        <>
            <Header></Header>
            <PlaylistSidenav></PlaylistSidenav>
            <Main>
                <PlaylistsCards></PlaylistsCards>
                <MusicPlayer/>
            </Main>
        </>
    )

}
