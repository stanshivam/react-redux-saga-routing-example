import React from 'react';
import { Route, Switch } from 'react-router-dom';

const SingleVehicle = props => {
  return (
    <>
      <p>Vehicle ID: {props.exposure.match.params.vehicleID}</p>
      <p>User ID: {props.userID}</p>
    </>
  );
};

const vehicleRoutes = ({ exposure: { match } }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        exact
        component={exp => {
          return <p>vehicles root page</p>;
        }}
      />
      <Route
        path={`${match.url}/:vehicleID`}
        exact
        component={exp => {
          return <SingleVehicle userID={match.params.userID} exposure={exp} />;
        }}
      />
    </Switch>
  );
};

export default vehicleRoutes;
