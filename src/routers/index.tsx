import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Login } from '../containers';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { BlankLayout, HeaderFooterLayout, OnlyFooterLayout, OnlyHeaderLayout } from '../layouts';
import { Header, Footer } from '../components/common';

export const Routers = () => {
  const buildysURL = process.env.REACT_APP_LINK_BUILDYS;

  return (
    <Router>
      <Switch>
        <PublicRouter
          exact={true}
          path={'/'}
          component={Home}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          isHasFooter={true}
          footer={Footer}
        />
      </Switch>
      <Switch>
        <PublicRouter
          exact={true}
          path={'/login'}
          component={Login}
          layout={HeaderFooterLayout}
        />
      </Switch>
    </Router>
  );
};
