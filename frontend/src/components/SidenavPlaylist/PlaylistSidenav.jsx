import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Data } from '../../data-faker';
import './sidenav.css';

function PlaylistSidenav () {
    const [playlists,setPlaylist] = useState([]);

    useEffect(_ => {
        setPlaylist(Data.playlists);
    })

    return (
        <div className="show-sidenav">

            <div className="sidenav">
                <div className="sidenav-img-container">
                    <img src="http://localhost:3000/tukki.png"></img>
                </div>
                <div className="sidenav-playlists-container">
                    <div className="playlist"><span className="quicksand">Every Song I know</span></div>
                    <div className="playlist"><span className="quicksand">Spanish</span></div>
                    <div className="playlist"><span className="quicksand">Films and Stuff</span></div>
                    <div className="playlist"><span className="quicksand">El Madrileño</span></div>
                    <div className="playlist"><span className="quicksand">The Hard Rock</span></div>
                    <div className="playlist"><span className="quicksand">El sonido de una decada</span></div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistSidenav;