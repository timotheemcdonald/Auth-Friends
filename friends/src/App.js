import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import styled from 'styled-components'

import {connect} from 'react-redux'
import {fetchFriends} from '../src/store/actions'

import './App.css';

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'

const Details = styled.header`

background-color:crimson;
color:white;
min-height:10vh;
display:flex;
justify-content:space-around;
align-items:center;

a {
  text-decoration:none;
  color:ivory;
}
`

function App() {
  return (
    <Router>
      <Details>
        <h2>Friends App</h2>
      <Link to='/login'>Login</Link>
      <Link to='/protected'>Protected</Link>
      </Details>

    <Switch>
      <PrivateRoute exact path='/protected' component={FriendsList} />
      <Route path='/login' component={Login} />
      <Route>
   <Login />
   </Route>
    </Switch>

    </Router>
  );
}

export default App;
