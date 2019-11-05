import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Users from '.';
import VehicleRoutes from './vehicles/routes';

const SingleUser = props => {
  return <p>User ID: {props.exposure.match.params.userID}</p>;
};

const UserRoutes = ({ match }) => {
  return (
    <>
      <Link to={`${match.url}/tgfhgg`}>Link to a user</Link>
      <Switch>
        <Route
          path={`${match.url}/`}
          exact
          component={exp => {
            return <Users exposure={exp} />;
          }}
        />
        <Route
          path={`${match.url}/:userID`}
          exact
          render={exp => {
            return <SingleUser exposure={exp} />;
          }}
        />
        <Route
          path={`${match.url}/:userID/vehicles`}
          render={exp => <VehicleRoutes exposure={exp} />}
        />
      </Switch>
    </>
  );
};

export default UserRoutes;
