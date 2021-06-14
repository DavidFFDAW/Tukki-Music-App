import React,{ useState } from 'react';
import User from './User';
import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import HttpService from '../services/http.service';

export default function UsersPanel(){
    const [users, setUsers] = useState([]);

    useEffect(_ => {
        const getUsersWithPetition = async () => {
            try{
                const { users } = await HttpService.get('http://192.168.1.56:8350');
                setUsers(users);

            } catch(err){
                console.error(err.message);
            }
        }
        getUsersWithPetition();
    },[])

    return (
        <div className="flex center">
            <div className="linear-box">
                <h3>Peticiones a <strong>Artistas</strong></h3>

                <div className="box">
                    <table className="custom-table">
                        <thead>
                            <th>UID</th>
                            <th>Nombre</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <Button colors="primary">Hello World</Button>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    );
}