import React from 'react';
import Popup from '../Popup';
import './userInfo.css';

export default function UserInfo({ children, img, name, description}){
    return (
        <div className="info flex flex-space-btw-not-align">
            <img className="info-image" src={img ? img : 'http://localhost:3000/user.png' }></img>
            <div className="info-data">
                <h3 className="non-upper-title">{ name }</h3>
                <p className="description">{ description }</p>
                <Popup>
                    <button className="btn btn-transparent">Editar Datos</button>                
                </Popup>
            </div>
        </div>
    );
}