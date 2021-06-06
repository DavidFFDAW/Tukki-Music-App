import React from 'react';
import './userInfo.css';

export default function UserInfo(){
    return (
        <div className="userinfo flex flex-space-btw flex-start">
            <div className="user-userimage"></div>
            <div className="user-userdata">
                <h3>Username</h3>
                <p>data...</p>
                <p>data...</p>
                <p>data...</p>
                <p>data...</p>
            </div>
        </div>
    );
}