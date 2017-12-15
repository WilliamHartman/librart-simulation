import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Browse from './components/Browse/Browse.js';


export default (
    <div>
    <Switch>
        <Route component={ Login } exact path='/' />
        <Route component={ Browse } path='/browse'/>
    </Switch>
    </div>
  )