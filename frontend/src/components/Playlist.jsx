import React, { useEffect, useState } from 'react';
import { Data } from '../data-faker';
import Song from './Song';
import UserInfo from './UserInfo/UserInfo';
import getSongs from '../services/playlist.service';
import './playlists.css';

function Playlist ({ id }) {

    const [playlistData, setPlaylistData] = useState('Loading...');
    const [content, setContent] = useState([]);

    useEffect(_ => {
        setPlaylistData(Data.playlists.find(playlist => playlist.id === +id));
        const songs = Data.songs.filter(playlists => playlists.playlist_id === +id);
        setContent(songs);
    },[]);

    return (
        <>
            <UserInfo name={ playlistData.name } description={ playlistData.description }></UserInfo>
            <div className="playlist-container">
                <div className="flex flex-space-btw space upper">
                    <span className="width-auto">Play</span>
                    <span>Nombre</span>
                    <span>Artista</span>
                    <span>URL</span>
                </div>
                <div className="song-list">
                    {
                        content.map(song => {
                            return <Song key={song.id} title={song.name} artist={song.author} uri={song.uri}></Song>
                        })
                    }
                </div>        
            </div>
        </>
    );
}

export default Playlist;