import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Measurements from './components/Measurements';
import Header from './components/Header';
import MembersPage from './components/MembersPage';
import AccountManagement from './components/AccountManagement';

const loginUrl = '/login';
const signUpUrl = '/signup';
const logOutUrl = '/logout';
const metricsUrl = '/metrics';
const memberUrl = '/me';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // auto-login
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log('app.js', user);

  return (
    <div className='App'>
      <Router>
        <Route exact path='/'>
          {user ? (
            <Measurements user={user} metricsUrl={metricsUrl} />
          ) : (
            <Login loginUrl={loginUrl} setUser={setUser} />
          )}
        </Route>

        <Route exact path='/signup'>
          <SignUp
            signUpUrl={signUpUrl}
            user={user}
            onLogin={setUser}
            metricsUrl={metricsUrl}
          />
        </Route>

        <Route exact path='/measurements'>
          <Measurements metricsUrl={metricsUrl} user={user} />
        </Route>

        <Route exact path='/memberspage'>
          <Header setUser={setUser} logOutUrl={logOutUrl} />
          <MembersPage memberUrl={memberUrl} />
        </Route>

        <Route exact path='/accountmanagement'>
          <AccountManagement
            memberUrl={memberUrl}
            user={user}
            setUser={setUser}
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;
