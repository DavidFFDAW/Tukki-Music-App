import React from 'react';

function Playlist ({ id, name }) {
    return (
        <div className="playlist">
            <span>{ name }</span>
        </div>
    );
}

export default Playlist;