import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';

function App() {
  return (
    <main>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>  
    </Router>  
  </main>
  );
}

export default App;
