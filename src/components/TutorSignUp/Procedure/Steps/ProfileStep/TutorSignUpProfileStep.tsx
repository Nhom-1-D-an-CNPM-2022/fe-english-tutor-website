import React, { useContext, useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '../../base/Divider/Divider';
import TutorSignUpStep from '../TutorSignUpStep';
import TutorSignUpStepBody from '../TutorSignUpStepBody';
import TutorSignUpStepFooter from '../TutorSignUpStepFooter';
import TutorSignUpStepHeader from '../TutorSignUpStepHeader';
import AddBasicInfoSection from './AddBasicInfoSection/AddBasicInfoSection';
import AddIntroductionSection from './AddIntroductionSection/AddIntroductionSection';
import ImportProfileSection from './ImportProfile/ImportProfileSection';
import {
  AddAboutMeDialog,
  AddBasicInfoDialog,
  AddEducationDialog,
  AddIntroductionDialog,
  AddLanguagesDialog,
  AddTeachingCertificatesDialog,
  AddTeachingStyleDialog,
  AddWorkExperienceDialog,
  AddProfilePictureDialog,
  RecordDialog,
} from './AddIntroductionSection/Dialogs';
import Button from '../../base/Button/Button';
import ProfileStepProvider from '../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';
import { TutorSignUpProcedureContext } from '../../../../../contexts/TutorSignUp/TutorSignUpProcedure/TutorSignUpProcedureContext';
import { isProfileCompleted } from './validation';

export default function TutorSignUpProfileStep() {
  const { profile, completedSteps, setProfileStepCompleted, goToStep } = useContext(
    TutorSignUpProcedureContext,
  );

  useEffect(() => {
    if (isProfileCompleted(profile)) {
      setProfileStepCompleted();
    }
  }, [profile]);

  return (
    <ProfileStepProvider profile={profile}>
      <TutorSignUpStep>
        <TutorSignUpStepHeader
          title="Cambly Tutor Profile"
          description={[
            'Your tutor profile is your chance to market yourself to students on Cambly. You can make edits later on your profile page.',
            '',
            'New students may browse tutor profiles to find a tutor that fits their learning goals and personality. Returning students may use the tutor profiles to find tutors they’ve had great experiences with already.',
          ]}
        />
        <Divider mt={4} mb={4} />
        <TutorSignUpStepBody>
          <ImportProfileSection />
          <Divider mt={3.5} mb={1.4} borderWidth={0} />
          <AddBasicInfoSection />
          <Divider mt={0} mb={2.5} borderWidth={0} />
          <AddIntroductionSection />
        </TutorSignUpStepBody>
        <TutorSignUpStepFooter>
          <Button
            type="contained"
            onClick={() => goToStep('supplemental')}
            endIcon={<ArrowForwardIcon />}
            disabled={!completedSteps.has('profile')}
          >
            Continue to supplemental questions
          </Button>
        </TutorSignUpStepFooter>
        <AddProfilePictureDialog />
        <AddBasicInfoDialog />
        <RecordDialog />
        <AddIntroductionDialog />
        <AddTeachingStyleDialog />
        <AddAboutMeDialog />
        <AddLanguagesDialog />
        <AddWorkExperienceDialog />
        <AddEducationDialog />
        <AddTeachingCertificatesDialog />
      </TutorSignUpStep>
    </ProfileStepProvider>
  );
}
