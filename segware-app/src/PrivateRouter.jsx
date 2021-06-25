import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => localStorage.getItem('token');

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ (props) => (isAuthenticated() ? (
      <Component { ...props } />
    ) : (
      <Redirect to={ { pathname: '/sign-in', state: { from: props.location } } } />
    )) }
  />
);

PrivateRouter.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRouter;
