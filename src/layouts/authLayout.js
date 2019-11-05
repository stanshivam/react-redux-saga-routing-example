import React from 'react';
import { Route } from 'react-router-dom';

const AuthLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className='DefaultLayout'>
          <div className='Header'>Authenticated Header</div>
          <Component {...matchProps} />
          <div className='Footer'>Footer</div>
        </div>
      )}
    />
  );
};

export default AuthLayout;
