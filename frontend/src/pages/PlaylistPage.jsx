import { useRoute } from 'wouter';
import checkAuth from '../hooks/useAuth';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import MusicPlayer from '../components/Player/Player';
import Playlist from "../components/Playlist";
import PlaylistSidenav from "../components/SidenavPlaylist/PlaylistSidenav";

export default function PlaylistPage(){
    checkAuth();

    const [, param] = useRoute('/playlist/:id');
    const { id } = param;

    return (
        <>
            <Header></Header>
            <PlaylistSidenav/>
            <Main>
                <Playlist id={ id }></Playlist>
            </Main>
            <MusicPlayer></MusicPlayer>
        </>
    );
}