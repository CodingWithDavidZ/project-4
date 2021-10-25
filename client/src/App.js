import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Login from './components/Login'
import SignUp from './components/SignUp';
import Measurements from './components/Measurements';
import Header from './components/Header';
import MembersPage from './components/MembersPage';

const apiUrl = 'http://localhost:3000';


function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/">
          <Login apiUrl={apiUrl}/>
        </Route>

        <Route exact path="/signup">
          <SignUp apiUrl={apiUrl}/>
        </Route>

        <Route exact path="/measurements">
          <Measurements apiUrl={apiUrl}/>
        </Route>

        <Route exact path="/memberspage">
        <Header/>
        <MembersPage apiUrl={apiUrl}/>
        </Route>


      </Router>
    </div>
  );
}

export default App;
