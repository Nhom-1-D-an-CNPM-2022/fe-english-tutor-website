import { Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '../../base/Divider/Divider';
import TutorSignUpStep from '../TutorSignUpStep';
import TutorSignUpStepBody from '../TutorSignUpStepBody';
import TutorSignUpStepFooter from '../TutorSignUpStepFooter';
import TutorSignUpStepHeader from '../TutorSignUpStepHeader';
import { imageWrapperStyle } from './style';
import Button from '../../base/Button/Button';
import React, { useContext } from 'react';
import { TutorSignUpProcedureContext } from '../../../../../contexts/TutorSignUpProcedure/TutorSignUpProcedureContext';

export default function TutorSignUpWelcomeStep() {
  const { goToStep } = useContext(TutorSignUpProcedureContext);

  return (
    <TutorSignUpStep>
      <TutorSignUpStepHeader
        title="Welcome to Cambly!"
        description="On behalf of our students, we’re so happy you’re here. Speaking English
        with a foreigner can be intimidating, but with your warmth, patience,
        and guidance, the students you meet will be chatting with confidence in
        no time! The Cambly Tutor signup process takes about 15 minutes, and
        we’ll guide you through each step."
      />
      <Divider mt={6} mb={6} borderWidth={0} />
      <TutorSignUpStepBody>
        <Box sx={imageWrapperStyle}>
          <img src="/images/tutor-sign-up/steps/welcome/Welcome.svg" />
        </Box>
      </TutorSignUpStepBody>
      <TutorSignUpStepFooter>
        <Button type="contained" onClick={() => goToStep('profile')} endIcon={<ArrowForwardIcon />}>
          Let's get started
        </Button>
      </TutorSignUpStepFooter>
    </TutorSignUpStep>
  );
}
