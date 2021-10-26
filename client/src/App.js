import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React, {useState} from 'react'

import Login from './components/Login'
import SignUp from './components/SignUp';
import Measurements from './components/Measurements';
import Header from './components/Header';
import MembersPage from './components/MembersPage';

const loginUrl = '/login'
const signUpUrl = '/signup'
const logOutUrl = '/logout'
const metricsUrl = '/metrics'
const memberUrl = '/me'




function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>

        <Route exact path="/">
          <Login loginUrl={loginUrl}/>
        </Route>

        <Route exact path="/signup">
          <SignUp signUpUrl={signUpUrl}/>
        </Route>

        <Route exact path="/measurements">
          <Measurements metricsUrl={metricsUrl}/>
        </Route>

        {/* <Route exact path="/memberspage">
        <Header setUser={setUser} logOutUrl={logOutUrl}/>
        <MembersPage memberUrl={memberUrl}/>
        </Route> */}


      </Router>
    </div>
  );
}

export default App;
