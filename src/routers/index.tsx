import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
<<<<<<< HEAD

import { Home, Login, Tutors, Register, State, VideoCall, Scheduler, Introduction } from '../containers';
=======
import {
  Home,
  Login,
  Tutors,
  Register,
  State,
  VideoCall,
  TutorInfo,
  Scheduler
} from '../containers';
>>>>>>> aed7a503fc02dc8a1099197df86a0496ffdd96b1
//import { SearchBox } from '../components';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { BlankLayout, HeaderFooterLayout, OnlyFooterLayout, OnlyHeaderLayout } from '../layouts';
import { Header, Footer } from '../components/common';
export const Routers = () => {
  const buildysURL = process.env.REACT_APP_LINK_BUILDYS;

  return (
    <State>
      <Router>
        <Switch>
          <PrivateRouter
            exact={true}
            path={'/'}
            component={Home}
            layout={HeaderFooterLayout}
            isHasHeader={true}
            header={Header}
            isHasFooter={true}
            footer={Footer}
          />
          <PublicRouter
            exact={true}
            path={'/home'}
            component={Introduction}
            layout={HeaderFooterLayout}
            isHasHeader={true}
            header={Header}
            isHasFooter={true}
            footer={Footer}
          />
          <PublicRouter
            exact={true}
            path={'/register'}
            component={Register}
            layout={HeaderFooterLayout}
            isHasHeader={true}
            header={Header}
            isHasFooter={true}
            footer={Footer}
          />
          <PublicRouter
            exact={true}
            path={'/call'}
            component={VideoCall}
            layout={HeaderFooterLayout}
            isHasHeader={false}
            header={Header}
            isHasFooter={false}
            footer={Footer}
          />
          <PublicRouter
            exact={true}
            path={'/tutors'}
            component={Tutors}
            layout={HeaderFooterLayout}
            isHasHeader={true}
            header={Header}
            isHasFooter={true}
            footer={Footer}
          />
          <PublicRouter
            exact={true}
            path={'/tutors/:tutorId'}
            component={TutorInfo}
            layout={HeaderFooterLayout}
            isHasHeader={true}
            header={Header}
            isHasFooter={true}
            footer={Footer}
          />
          <PublicRouter
            exact={true}
            path={'/student/login'}
            component={Login}
            layout={HeaderFooterLayout}
            isHasHeader={true}
            header={Header}
            isHasFooter={true}
            footer={Footer}
          />
          <PrivateRouter
            exact={true}
            path={'/log-out'}
            component={Home}
            layout={HeaderFooterLayout}
            isHasHeader={true}
            header={Header}
            isHasFooter={true}
            footer={Footer}
          />
          <PublicRouter
            exact={true}
            path={'/student/schedule'}
            component={Scheduler}
            layout={HeaderFooterLayout}
            isHasHeader={true}
            header={Header}
            isHasFooter={true}
            footer={Footer}
          />
          <PublicRouter
            exact={true}
            path={'/student/schedule/:id'}
            component={Scheduler}
            layout={HeaderFooterLayout}
            isHasHeader={true}
            header={Header}
            isHasFooter={true}
            footer={Footer}
          />
        </Switch>
      </Router>
    </State>
  );
};
