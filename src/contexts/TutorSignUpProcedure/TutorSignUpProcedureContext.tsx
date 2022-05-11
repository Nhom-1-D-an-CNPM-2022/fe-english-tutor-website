import React, { createContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { RootState } from '../../redux/rootReducer';
import { TutorSignUpProfile } from '../../redux/slice/appSlice/tutorSignUpSlice';

export type Steps =
  | 'welcome'
  | 'profile'
  | 'supplemental'
  // | "kidsDemoLesson"
  | 'connection';

interface ContextValue {
  currentStep: Steps;
  profile: TutorSignUpProfile;
  numberOfSteps: number;
  completedSteps: Set<Steps>;
  goToStep: (step: Steps) => void;
  setProfileStepCompleted: () => void;
}

export const TutorSignUpProcedureContext = createContext<ContextValue>({} as any);

export default function TutorSignUpProcedureProvider({ children }: React.PropsWithChildren<{}>) {
  const profile = useSelector((store: RootState) => store.tutorSignUpSlice);
  const history = useHistory();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState<Steps>(
    location.pathname.split('/').pop() as Steps,
  );
  const numberOfSteps = 3;
  const [completedSteps, setCompletedSteps] = useState<Set<Steps>>(new Set());

  const goToStep = (step: Steps) => {
    const urlSegments = location.pathname.split('/');
    const lastSegment = urlSegments.pop();

    if (lastSegment === step) {
      return;
    }

    urlSegments.push(step);
    setCurrentStep(step);
    history.push(urlSegments.join('/'));
  };

  const setProfileStepCompleted = () => {
    setCompletedSteps(completedSteps.add('profile'));
  };

  return (
    <TutorSignUpProcedureContext.Provider
      value={{
        currentStep,
        profile,
        numberOfSteps,
        completedSteps,
        goToStep,
        setProfileStepCompleted,
      }}
    >
      {children}
    </TutorSignUpProcedureContext.Provider>
  );
}
