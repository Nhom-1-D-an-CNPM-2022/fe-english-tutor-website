import React, { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { RootState } from '../../../redux/rootReducer';
import { TutorSignUpProfile } from '../../../redux/slice/appSlice/tutorSignUpSlice';

export type Steps =
  | 'welcome'
  | 'profile'
  | 'supplemental'
  // | "kidsDemoLesson"
  | 'connection'
  | 'status';

interface ContextValue {
  currentStep: Steps;
  profile: TutorSignUpProfile;
  numberOfSteps: number;
  completedSteps: Set<Steps>;
  isProcedureCompleted: boolean;
  goToStep: (step: Steps) => void;
  isProfileStepCompleted: (profile: TutorSignUpProfile) => boolean;
  isSupplementalStepCompleted: (profile: TutorSignUpProfile) => boolean;
  setStepCompleted: (step: Steps) => void;
  setProcedureCompleted: () => void;
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
  const [completedSteps, setCompletedSteps] = useState<Set<Steps>>(new Set<Steps>());
  const [isProcedureCompleted, setIsProcedureCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (isProfileStepCompleted(profile)) {
      setCompletedSteps(new Set(JSON.parse(JSON.stringify([...completedSteps, 'profile']))));
    }

    if (isSupplementalStepCompleted(profile)) {
      setCompletedSteps(new Set(JSON.parse(JSON.stringify([...completedSteps, 'supplemental']))));
    }
  }, []);

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

  const isProfileStepCompleted = ({
    displayName,
    hometown,
    dateOfBirth,
    introduction,
    videoIntroduction,
    languages,
  }: TutorSignUpProfile) => {
    return (
      Boolean(displayName) &&
      Boolean(hometown) &&
      Boolean(dateOfBirth) &&
      Boolean(introduction) &&
      Boolean(videoIntroduction) &&
      Boolean(languages[0].language) &&
      Boolean(languages[0].dialect)
    );
  };

  const isSupplementalStepCompleted = ({ motivation, source }: TutorSignUpProfile) => {
    return Boolean(motivation) && Boolean(source);
  };

  const setStepCompleted = (step: Steps) => {
    setCompletedSteps(new Set(JSON.parse(JSON.stringify([...completedSteps, step]))));
  };

  const setProcedureCompleted = () => {
    setIsProcedureCompleted(true);
  };

  return (
    <TutorSignUpProcedureContext.Provider
      value={{
        currentStep,
        profile,
        numberOfSteps,
        completedSteps,
        isProcedureCompleted,
        goToStep,
        isProfileStepCompleted,
        isSupplementalStepCompleted,
        setStepCompleted,
        setProcedureCompleted,
      }}
    >
      {children}
    </TutorSignUpProcedureContext.Provider>
  );
}
