import React, { useState, useEffect } from 'react';
import useUser from '../../hooks/useUser';
import { useLocation } from 'wouter';
import './Register.css';

export default function Register(){
  const [,setLocation] = useLocation();
  const [ name, setName ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ repeatPassword, setRepeatPassword ] = useState('');
  const { isLogged, register } = useUser();

  useEffect(_ => {
    if(isLogged){
      setLocation('/');
    }
  },[isLogged, setLocation])

  const handleSubmit = ev => {
    ev.preventDefault(); 
    register({ name, username, email, password, repeatPassword });
  };

  return (
      <div className="flex flex-center">
        <div className="box">
            <div className="rounded-box">
                <form className="login-form" onSubmit={ handleSubmit }>
                    <div className="inner-box">
                      <img src={`http://localhost:3500/tukki.png`} className="register-tukki-logo"/>
                      <div>
                        <div className="flex flex-space-btw">
                          <div>
                            <label>Nombre:</label>
                            <input type="text" onChange={ (ev) => setName(ev.target.value) } value={ name }/>
                          </div>
                          <div>
                            <label>Username:</label>
                            <input type="text" onChange={ (ev) => setUsername(ev.target.value) } value={ username }/>
                          </div>
                          <div>
                            <label>Correo:</label>
                            <input type="email" onChange={ (ev) => setEmail(ev.target.value) } value={ email }/>
                          </div>
                        </div>
                        <div className="flex flex-space-btw">
                          <div>
                            <label>Fecha Nacimiento:</label>
                            <input type="text"/>
                          </div>
                          <div>
                            <label>Contraseña:</label>
                            <input type="password" onChange={ (ev) => setPassword(ev.target.value) } value={ password }/>
                          </div>
                          <div>
                            <label>Repite la Contraseña:</label>
                            <input type="password" onChange={ (ev) => setRepeatPassword(ev.target.value) } value={ repeatPassword }/>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-transparent width-100 up down">Registrarme</button>
                      </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
  );
}
