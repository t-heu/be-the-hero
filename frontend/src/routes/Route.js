import React from 'react';
//import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = localStorage.getItem('ongId')
  
  if(signed) {
    const decoded = decode(signed);
    
    if (decoded.exp < Date.now() / 1000) {
      return <Redirect to="/" />;
    }
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/profile" />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Component {...props} /> 
      )}
    />
  );
}
