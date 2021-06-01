import React, { useState, useEffect } from 'react';
import PlaylistList from './PlaylistList.jsx';
import Playlist from './Playlist.jsx';
import http from './../services/http.service.js';

function PlaylistSidenav () {
    const [playlists,setPlaylist] = useState([]);
    const [loading,setLoading] = useState(false);
    const endpoint = 'http://vps-f87b433e.vps.ovh.net/php-actv/car-renting/backend/cars/';

    useEffect(_ => {
        setLoading(true);
        http.get(endpoint).then(resp => {
            setPlaylist(resp);
            setLoading(false);});
    }, []);

    return (
        <div>
            <div>
                <img src="/public/tukki.png"></img>
            </div>
            <div>
                <PlaylistList></PlaylistList>
            </div>
        </div>
    )
}

export default PlaylistSidenav;