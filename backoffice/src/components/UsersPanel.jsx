import React,{ useState } from 'react';
import User from './User';
import { Data } from '../data-faker';
import { Button } from '@material-ui/core';

export default function UsersPanel(){
    const [users, setUsers] = useState(Data.users);

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