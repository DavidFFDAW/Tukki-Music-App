import React from 'react';

import { UserContextProvider } from './contexts/UserContext';
import checkAuth from './hooks/useAuth';

import UsersPanel from './components/UsersPanel';
import { Router, Switch, Route } from 'wouter';
import LogInPage from './pages/LogIn.jsx';
import './App.css';

function App() { 

  return (
      <>
        <UserContextProvider>
          <Router>
              <Switch>
                <Route path="/admin/login">
                  <LogInPage/>
                </Route>
                { checkAuth() }
                <Route path="/admin/users">
                  <UsersPanel />
                </Route>

            </Switch>
          </Router>

        </UserContextProvider>
      </>
  );
}
export default App;