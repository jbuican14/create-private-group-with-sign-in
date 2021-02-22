import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignInPage } from './auth';
import { CreateGroupPage, GroupListPage, GroupPage } from './groups';

const routes = [
  {
    path: '/',
    Component: GroupListPage,
    exact: true,
  },
  {
    path: '/groups/:id',
    Component: GroupPage,
  },
  {
    path: '/create-group',
    Component: CreateGroupPage,
  },
  {
    path: '/sign-in',
    Component: SignInPage,
  },
];

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route, idx) => (
        <Route key={idx} path={route.path} exact={route.exact}>
          <route.Component />
        </Route>
      ))}
    </Switch>
  </Router>
);
