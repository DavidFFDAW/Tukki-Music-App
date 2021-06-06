import React from 'react';
import { useRoute } from 'wouter';

function Playlist () {
    const [match, params] = useRoute('/playlist/:id');
    const { id } = params;

    return (
        <div className="playlist">
            <h3>Playlist { id }</h3>
        </div>
    );
}

export default Playlist;