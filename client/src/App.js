import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Login from './components/Login'

const apiUrl = 'http://localhost:3000';


function App() {
  return (
    <div className="App">
      <Router>
      <Login apiUrl={apiUrl}/>
      </Router>
    </div>
  );
}

export default App;
