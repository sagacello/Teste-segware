import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';


const Routes = () => (
  <Switch>
    <Route exact path="/sign-in" component={ SignIn } />
    <Route exact path="/sign-up" component={ SignUp } />
    <Route exact path="/forgot-password" component={ ForgotPassword } />
  </Switch>
);

export default Routes;
