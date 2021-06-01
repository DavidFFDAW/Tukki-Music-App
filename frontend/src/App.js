import React, { useContext } from 'react';
import { Route, Link, useLocation } from 'wouter';
import Spinner from './components/Spinner.jsx';
import LogIn from './components/LogIn/login.jsx';
import { UserContextProvider } from './context/UserContext';
import useUser from './hooks/useUser.js';
//import useAuth from './services/useAuth';
import './App.css';

function App() {
  const { isLoggedIn } = useUser();
  const [, navigate] = useLocation();

  if(!isLoggedIn){
    return navigate('/login');
  }
  

  return (
    <React.StrictMode>
      <UserContextProvider>
        <Route name="/login" path="/login" component={ LogIn }/>
        <Route name="/home" path="/home">
          <h2>Esto seria una ruta 'Home'.</h2>
        </Route>
        <Route name="/dashboard" path="/dashboard">
          <h2>Esto seria una ruta 'Dashboard'.</h2>
        </Route>
    </UserContextProvider>
    </React.StrictMode>
  );
}
export default App;