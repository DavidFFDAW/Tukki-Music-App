import { Data } from '../data-faker';
import React from 'react';

export default function login ({ username, password }){
    if(username === Data.user.name && password === Data.user.password){
        return true;
    }
    return false;
}