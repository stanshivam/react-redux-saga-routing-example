import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, Link, Switch } from 'react-router-dom';
import UserRoutes from './containers/users/routes';
import DefaultLayout from './layouts/defaultLayout';
import AuthLayout from './layouts/authLayout';
import configureStore from './redux/store';

export const store = configureStore();

const history = createBrowserHistory();

const Menu = () => (
  <>
    <ul>
      <li>
        <Link to='/'>Menu</Link>
      </li>
      <li>
        <Link to='/users'>Users List</Link>
      </li>
      <li>
        <Link to='/signin'>Signin</Link>
      </li>
      <li>
        <Link to='/nested'>Nested Route</Link>
      </li>
    </ul>
  </>
);

const Signin = () => <p>Signin Component</p>;
const Signup = () => <p>Signun Component</p>;

const Routing = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Switch>
            <DefaultLayout path={'/'} exact component={Menu} />
            <AuthLayout path={'/users'} component={UserRoutes} />
            <AuthLayout
              path={'/internal'}
              component={() => <p>internal profile page</p>}
            />
            <Route
              path={'/signin'}
              render={exp => {
                return <Signin />;
              }}
            />
            <Route
              path={'/signup'}
              render={exp => {
                return <Signup />;
              }}
            />
            <Route component={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default Routing;
