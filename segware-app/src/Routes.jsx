import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Feed from './pages/Feed';
import AllFeed from './pages/AllFeed';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRouter from './PrivateRouter';


const Routes = () => (
  <Switch>
    <Route exact path="/sign-up" component={ SignUp } />
    <Route exact path="/sign-in" component={ SignIn } />
    <Route exact path="/" component={ SignIn } />
    <Route exact path="/forgot-password" component={ ForgotPassword } />
    <PrivateRouter exact path="/feed" component={ Feed } />
    <PrivateRouter exact path="/allFeed" component={ AllFeed } />
  </Switch>
);

export default Routes;
