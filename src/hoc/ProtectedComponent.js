import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedComponent = ({ children, ...rest }) => {
  const { isloged } = useSelector(state => state.session);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isloged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

ProtectedComponent.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default ProtectedComponent;
