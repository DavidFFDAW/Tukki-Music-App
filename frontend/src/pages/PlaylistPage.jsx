import { useParams } from 'react-router-dom';
import Main from "../components/Main/Main";
import Playlist from "../components/Playlist";
import PlaylistSidenav from "../components/SidenavPlaylist/PlaylistSidenav";

export default function PlaylistPage(){

    let { id } = useParams();

    return (
        <>
            <PlaylistSidenav/>
            <Main>
                <Playlist id={ id }></Playlist>
            </Main>
        </>
    );
}