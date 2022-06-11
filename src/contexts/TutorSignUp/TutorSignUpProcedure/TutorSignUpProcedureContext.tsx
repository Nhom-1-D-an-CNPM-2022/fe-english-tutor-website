import React, { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../../redux';
import { RootState } from '../../../redux/rootReducer';
import {
  setProfile,
  TutorSignUpProfile,
  updateProfile,
  updateProfileMedia,
} from '../../../redux/slice/appSlice/tutorSignUpSlice';
import tutorSignUpApi from '../../../services/aixos/tutorSignUpApi';
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
  const dispatch = useAppDispatch();
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
    const accessToken = localStorage.getItem('accessToken');

    const fetchProfile = async () => {
      try {
        const response = await tutorSignUpApi.getProfile(accessToken);
        const profile = response.data;
        dispatch(setProfile(profile));
      } catch (error) {
        localStorage.removeItem('accessToken');
        history.push({
          pathname: '/',
        });
      }
    };

    if (accessToken && !profile.isFetched) {
      fetchProfile();
    }
  }, []);

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
    handleUploadFile(file, (response: any) => {
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
