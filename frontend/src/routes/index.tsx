import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={SignIn} onlySignedOut />
    <Route path="/signup" component={SignUp} onlySignedOut />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
