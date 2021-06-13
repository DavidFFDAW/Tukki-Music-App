import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { Data } from '../../data-faker';
import './cards.css';

export default function PlaylistsCards(){

    const [playlists, setPlaylist] = useState([]);

    useEffect(_ => {
        setPlaylist(Data.playlists);
    },[]);

    return (
        <>
            <div className="flex flex-center">
                <h3 className="playlists-title">Tus playlist</h3>
            </div>
            <div className="grid-playlists">
                {
                    playlists.map(playlist => {
                        return (                          
                            <Card 
                                key={playlist.id} 
                                id={playlist.id} 
                                title={playlist.name} 
                                content={playlist.description || ''}
                                href="/user/playlist/"
                            ></Card>
                        )
                    })
                }
            </div>
        </>
    );
}