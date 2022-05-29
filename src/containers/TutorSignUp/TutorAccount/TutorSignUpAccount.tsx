import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TutorAccountLayout from '../../../layouts/TutorSignUpLayout/TutorAccountLayout';
import TutorSignUpLayout from '../../../layouts/TutorSignUpLayout/TutorSignUpLayout';
import TutorAccountLogin from './TutorAccountLogin';
import TutorAccountSignUp from './TutorAccountSignUp';

export function TutorSignUpAccount() {
  return (
    <TutorSignUpLayout>
      <TutorAccountLayout>
        <Switch>
          <Route path="/tutor/signup" component={TutorAccountSignUp} exact />
          <Route path="/tutor/login" component={TutorAccountLogin} exact />
        </Switch>
      </TutorAccountLayout>
    </TutorSignUpLayout>
  );
}
