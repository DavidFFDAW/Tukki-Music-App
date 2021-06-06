import React from 'react';
import Header from '../components/Header/Header';
import PlaylistSidenav from '../components/SidenavPlaylist/PlaylistSidenav';
import Main from '../components/Main/Main';
import UserInfo from '../components/UserInfo/UserInfo';
import PlaylistsCards from '../components/PlaylistsCards/PlaylistsCards';
import MusicPlayer from '../components/Player/Player';

export default function HomePage(){
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
