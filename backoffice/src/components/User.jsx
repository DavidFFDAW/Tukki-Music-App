import React from 'react';

export default function User({ uid, username, name, email }){

    function handlerClick(ev){
        //ev.target.dataset.id;
    }

    return (
        <>
            <tr>
                <td>{ uid }</td>
                <td>{ name }</td>
                <td>{ username }</td>
                <td>{ email }</td>
                <td><button data-id={ uid } onClick={ handlerClick }>Botoncin</button></td>
            </tr>

        </>
    );
}