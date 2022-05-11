import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TutorSignUpPlatformSelector from '../../components/TutorSignUp/PlatformSelector/TutorSignUpPlatformSelector';
import TutorSignUpConnectionStep from '../../components/TutorSignUp/Procedure/Steps/ConnectionTestStep/TutorSignUpConnectionStep';
import TutorSignUpProfileStep from '../../components/TutorSignUp/Procedure/Steps/ProfileStep/TutorSignUpProfileStep';
import TutorSignUpSupplementalStep from '../../components/TutorSignUp/Procedure/Steps/SupplementalStep/TutorSignUpSupplementalStep';
import TutorSignUpWelcomeStep from '../../components/TutorSignUp/Procedure/Steps/WelcomeStep/TutorSignUpWelcomeStep';
import TutorSignUpLayout from '../../layouts/TutorSignUpLayout/TutorSignUpLayout';
import TutorSignUpProcedureLayout from '../../layouts/TutorSignUpLayout/TutorSignUpProcedureLayout';

export const TutorSignUp = () => {
  return (
    <TutorSignUpLayout>
      <Switch>
        <Route path="/tutorsignup/platformSelector" component={TutorSignUpPlatformSelector} exact />
        <Route path="/tutorsignup/step/:step?">
          <TutorSignUpProcedureLayout>
            <Switch>
              <Route path="/tutorsignup/step/welcome" component={TutorSignUpWelcomeStep} exact />
              <Route path="/tutorsignup/step/profile" component={TutorSignUpProfileStep} exact />
              <Route
                path="/tutorsignup/step/supplemental"
                component={TutorSignUpSupplementalStep}
                exact
              />
              <Route
                path="/tutorsignup/step/connection"
                component={TutorSignUpConnectionStep}
                exact
              />
            </Switch>
          </TutorSignUpProcedureLayout>
        </Route>
      </Switch>
    </TutorSignUpLayout>
  );
};
