import React, { useContext } from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SongContext from '../context/SongContext';

export default function Song({ title, artist, album, uri, diration }){

    const { setPlaying } = useContext(SongContext);

    const handlePlay = event => {
        console.log(uri);
        /* setPlaying({uri}); */
    }

    return (
        <>
            <div className="song flex flex-space-btw space">
                <span className="width-auto icon" onClick={ handlePlay }><PlayCircleFilledIcon></PlayCircleFilledIcon></span>
                <span>{ title }</span>
                <span>{ artist }</span>
                <span>{ uri }</span>
            </div>
        </>
    )
}