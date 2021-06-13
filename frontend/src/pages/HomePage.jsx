import React from 'react';
import Header from '../components/Header/Header';
import PlaylistSidenav from '../components/SidenavPlaylist/PlaylistSidenav';
import Main from '../components/Main/Main';
import PlaylistsCards from '../components/PlaylistsCards/PlaylistsCards';
import MusicPlayer from '../components/MusicPlayer/Player';
import checkAuth from '../hooks/useAuth';

export default function HomePage(){
    //checkAuth();

    return(
        <>
            <PlaylistSidenav></PlaylistSidenav>
            <Main>
                <PlaylistsCards></PlaylistsCards>
            </Main>
        </>
    )

}
