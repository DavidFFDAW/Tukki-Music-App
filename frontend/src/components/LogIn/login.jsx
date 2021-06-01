import React from 'react';
import './styles.css';


export default function LogIn(){
    return(
        <div className="box">
            <div className="rounded-box">
                <div className="login-form">
                    <div className="inner-box">
                        <div className="flex flex-space-btw">
                            <div className="color-block"><img src="https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE"/></div>
                            <div className="content">                                                        
                                <p>Miles de playlists te esperan.<br/> 
                                Inicia sesión o crea una cuenta para empezar a disfrutar
                                </p>
                                
                                <div>
                                    <label>Correo o Username:</label>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <label>Contraseña:</label>
                                    <input type="text"/>
                                </div>
                                <div className="flex flex-space-btw btn-div">
                                    <button type="button" className="btn btn-transparent">Registrarme</button>
                                    <button type="button" className="btn btn-transparent">Iniciar sesión</button>
                                </div>
                                <div className="flex flex-center">
                                    <a>He olvidado mi contraseña</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}