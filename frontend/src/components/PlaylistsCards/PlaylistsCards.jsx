import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import HttpService from '../../services/http.service';
import './cards.css';

export default function PlaylistsCards(){

    const [playlists, setPlaylist] = useState([]);

    useEffect(async () => {
        const myPlaylists = await HttpService.get('http://192.168.1.56:8350/api/myplaylists');
        const { playlists } = myPlaylists;  
        console.log(myPlaylists);      
        console.log(playlists);      
        setPlaylist(playlists);
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