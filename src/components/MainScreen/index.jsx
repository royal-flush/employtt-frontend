import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../Login';
import User from '../User';
import Admin from '../Admin';
const Root = () =>(
  <Router>
    <Route exact path='/' component={Login} />
    <Route path='/user' component={User} />
    <Route path='/admin' component={Admin} />
  </Router>
)

export default Root;