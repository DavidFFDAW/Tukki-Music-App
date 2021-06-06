import React, { useState } from 'react';
import './sidenav.css';

function PlaylistSidenav () {
/*     const [playlists,setPlaylist] = useState([]);
    const [loading,setLoading] = useState(false);
    const endpoint = 'http://vps-f87b433e.vps.ovh.net/php-actv/car-renting/backend/cars/';

    useEffect(_ => {
        setLoading(true);
        http.get(endpoint).then(resp => {
            setPlaylist(resp);
            setLoading(false);});
    }, []);
 */
    return (
        <div className="show-sidenav">

            <div className="sidenav">
                <div className="sidenav-img-container">
                    <img src="http://localhost:3000/tukki.png"></img>
                </div>
                <div className="sidenav-playlists-container">
                    <div className="playlist"><span>Every Song I know</span></div>
                    <div className="playlist"><span>Spanish</span></div>
                    <div className="playlist"><span>Films and Stuff</span></div>
                    <div className="playlist"><span>El Madrileño</span></div>
                    <div className="playlist"><span>The Hard Rock</span></div>
                    <div className="playlist"><span>El sonido de una decada</span></div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistSidenav;