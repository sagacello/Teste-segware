import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Feed from './pages/Feed';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRouter from './PrivateRouter';


const Routes = () => (
  <Switch>
    <Route exact path="/sign-in" component={ SignIn } />
    <Route exact path="/sign-up" component={ SignUp } />
    <Route exact path="/forgot-password" component={ ForgotPassword } />
    <PrivateRouter exact path="/feed" component={ Feed } />
  </Switch>
);

export default Routes;
