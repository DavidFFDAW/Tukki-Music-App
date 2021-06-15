import React, { useState } from "react";
import { createNewMix } from "../services/mixes.service";

export default function MixCreation(){
    const [image,setImage] = useState('');
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');

    const handleSubmit = ev => {

    }

    return (
        <div className="flex flex-center">

        <div className="box">
            <div className="rounded-box">
                <form className="login-form" encType="form" onSubmit={handleSubmit}>
                    <div className="inner-box">
                        <div className="flex flex-space-btw">
                            <div className="color-block"><img src="http://localhost:3000/user.png"/></div>
                            <div className="content">                                
                                <div>
                                    <label>Nombre:</label>
                                    <input type="text" autoComplete="off" onChange={ (ev) => setName(ev.target.value) } value={name}/>
                                </div>
                                <div>
                                    <label>Descripcion:</label>
                                    <input type="text" onChange={ (ev) => setDescription(ev.target.value)} value={description}/>
                                </div>
                                <div className="flex flex-space-btw btn-div">
                                    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )

}