import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TutorSignUpPlatformSelector from '../../components/TutorSignUp/PlatformSelector/TutorSignUpPlatformSelector';
import TutorSignUpApplicationStatusStep from '../../components/TutorSignUp/Procedure/Steps/ApplicationStatusStep/TutorSignUpApplicationStatusStep';
import TutorSignUpDemoLessonStep from '../../components/TutorSignUp/Procedure/Steps/DemoLessonStep/TutorSignUpDemoLessonStep';
import TutorSignUpProfileStep from '../../components/TutorSignUp/Procedure/Steps/ProfileStep/TutorSignUpProfileStep';
import TutorSignUpSupplementalStep from '../../components/TutorSignUp/Procedure/Steps/SupplementalStep/TutorSignUpSupplementalStep';
import TutorSignUpWelcomeStep from '../../components/TutorSignUp/Procedure/Steps/WelcomeStep/TutorSignUpWelcomeStep';
import TutorSignUpProcedureProvider from '../../contexts/TutorSignUp/TutorSignUpProcedure/TutorSignUpProcedureContext';
import TutorSignUpLayout from '../../layouts/TutorSignUpLayout/TutorSignUpLayout';
import TutorSignUpProcedureLayout from '../../layouts/TutorSignUpLayout/TutorSignUpProcedureLayout';

export function TutorSignUpProcedure() {
  return (
    <TutorSignUpLayout>
      <TutorSignUpProcedureProvider>
        <Switch>
          <Route
            path="/tutorsignup/platformSelector"
            component={TutorSignUpPlatformSelector}
            exact
          />
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
                  path="/tutorsignup/step/demoLesson"
                  component={TutorSignUpDemoLessonStep}
                  exact
                />
                <Route
                  path="/tutorsignup/step/status"
                  component={TutorSignUpApplicationStatusStep}
                  exact
                />
              </Switch>
            </TutorSignUpProcedureLayout>
          </Route>
        </Switch>
      </TutorSignUpProcedureProvider>
    </TutorSignUpLayout>
  );
}
