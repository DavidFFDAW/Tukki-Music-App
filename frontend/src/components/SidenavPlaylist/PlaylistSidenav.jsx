import React, { useEffect, useState } from 'react';
import useMixes from '../../hooks/useMixes';
import { useHistory, Link } from 'react-router-dom';
import routes from '../../constants/routes';
import Spinner  from '../../components/Spinner'

import './sidenav.css';

function PlaylistSidenav () {

    const history = useHistory();
    const { tukkiMixes, getMyMixes } = useMixes();
    const [ isLoading, setLoading ] = useState(false);

    useEffect(() => {
        getMyMixes();
    },[]);

    const handleClick = ev => {
        history.push(`/user/playlist/${ ev.target.id }`);
    }

    
    return (
        <div className="show-sidenav">

            <div className="sidenav">
                <div className="sidenav-img-container">
                    <img src="http://localhost:3000/tukki.png"></img>
                    <div className="flex flex-center down sidenav-create-mix">
                        <Link className="btn btn-primary" to={ routes.mixCreate }>Crear un nuevo Mix</Link>
                    </div>
                </div>
                
                <div className="sidenav-playlists-container">
                    { isLoading && <Spinner/> }
                {
                    tukkiMixes.map(mix => {
                        return (
                            <div className="playlist" key={ mix.id } id={ mix.id } onClick={ handleClick }><span className="quicksand">{ mix.name }</span></div>
                        );
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default React.memo(PlaylistSidenav);