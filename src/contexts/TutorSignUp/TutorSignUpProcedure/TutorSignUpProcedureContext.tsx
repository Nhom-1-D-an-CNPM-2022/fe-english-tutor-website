import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { RootState } from '../../../redux/rootReducer';
import {
  TutorSignUpProfile,
  updateProfile,
  updateProfileMedia,
} from '../../../redux/slice/appSlice/tutorSignUpSlice';
import { TUTOR_SIGN_UP_PROCEDURE_STEPS } from './constants';
import {
  handleUploadFile,
  validateDemoLessonStep,
  validateProfileStep,
  validateSupplementalStep,
} from './helpers';

export type Steps = 'welcome' | 'profile' | 'supplemental' | 'demoLesson' | 'connection' | 'status';

interface ContextValue {
  steps: typeof TUTOR_SIGN_UP_PROCEDURE_STEPS;
  currentStep: Steps;
  profile: TutorSignUpProfile;
  numberOfSteps: number;
  isProfileStepCompleted: boolean;
  isSupplementalStepCompleted: boolean;
  isDemoLessonStepCompleted: boolean;
  isProcedureCompleted: boolean;
  handleUpdateProfileMedia: (
    mediaType: 'videoIntroduction' | 'demoLesson' | string,
    file: File,
  ) => void;
  goToStep: (step: Steps) => void;
  handleSubmitProfile: () => void;
}

export const TutorSignUpProcedureContext = createContext<ContextValue>({} as any);

export default function TutorSignUpProcedureProvider({ children }: React.PropsWithChildren<{}>) {
  const dispatch = useDispatch();
  const profile = useSelector((store: RootState) => store.tutorSignUpSlice);
  const history = useHistory();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState<Steps>(
    location.pathname.split('/').pop() as Steps,
  );
  const numberOfSteps = 3;
  const [isProfileStepCompleted, setIsProfileStepCompleted] = useState<boolean>(false);
  const [isSupplementalStepCompleted, setIsSupplementalStepCompleted] = useState<boolean>(false);
  const [isDemoLessonStepCompleted, setIsDemoLessonStepCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (!isProfileStepCompleted && validateProfileStep(profile)) {
      setIsProfileStepCompleted(true);
    }
  }, [profile]);

  useEffect(() => {
    if (!isSupplementalStepCompleted && validateSupplementalStep(profile)) {
      setIsSupplementalStepCompleted(true);
    }
  }, [profile.motivation, profile.source]);

  useEffect(() => {
    if (!isDemoLessonStepCompleted && validateDemoLessonStep(profile)) {
      setIsDemoLessonStepCompleted(true);
    }
  }, [profile.demoLesson]);

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

  const handleUpdateProfileMedia = (
    mediaType: 'profilePicture' | 'videoIntroduction' | 'demoLesson' | string,
    file: File,
  ) => {
    handleUploadFile(file, function successCallback(response: any) {
      dispatch(
        updateProfileMedia({
          mediaType,
          profileMedia: {
            url: response.url,
            publicId: response.public_id,
          },
        }),
      );
    });
  };

  const handleSubmitProfile = () => {
    dispatch(updateProfile({ isSubmitted: true }));
  };

  return (
    <TutorSignUpProcedureContext.Provider
      value={{
        steps: TUTOR_SIGN_UP_PROCEDURE_STEPS,
        currentStep,
        profile,
        numberOfSteps,
        isProfileStepCompleted,
        isSupplementalStepCompleted,
        isDemoLessonStepCompleted,
        isProcedureCompleted: profile.isSubmitted,
        handleUpdateProfileMedia,
        goToStep,
        handleSubmitProfile,
      }}
    >
      {children}
    </TutorSignUpProcedureContext.Provider>
  );
}
