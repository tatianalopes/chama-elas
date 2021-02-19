import React from 'react';
import {
  Route as ReactDomRoute,
  RouteProps as ReactDomRouteProps,
  Redirect
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDomRouteProps {
  isPrivate?: boolean;
  onlySignedOut?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, onlySignedOut = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return ((!!user && onlySignedOut) || (isPrivate && !!!user)) ? (
          <Redirect
            to={{
              pathname: isPrivate ? '/signin' : '/',
              state: { from: location },
            }} />
        ) : (
          <Component />
        )
      }} />
  );
};

export default Route;
