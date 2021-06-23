import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUpForm from './pages/SignUpForm';
import ForgotPassword from './pages/ForgotPassword';


const Routes = () => (
  <Switch>
    <Route exact path="/login" component={ Login } />
    <Route exact path="/register" component={ SignUpForm } />
    <Route exact path="/forgot" component={ ForgotPassword } />


  </Switch>
);

export default Routes;
