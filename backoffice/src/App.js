import React, { useContext } from 'react';
import UsersPanel from './components/UsersPanel';
import LogInPage from './pages/LogIn.jsx';
import './App.css';

function App() { 

  return (
    <React.StrictMode>
      <LogInPage/>
    </React.StrictMode>
  );
}
export default App;