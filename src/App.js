import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import Login from './pages/Login/Login';
import List from './pages/List/List';
import PrivateRoute from './helpers/PrivateRoute'

import './App.css';


function App() {
  return (
    <div>
        <Router>
        <Header/>
          <Switch>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/team">
                <Team/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <PrivateRoute exact path="/pokemons">
                    <List />
            </PrivateRoute>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
