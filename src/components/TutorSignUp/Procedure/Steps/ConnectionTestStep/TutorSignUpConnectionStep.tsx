import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../base/Button/Button';
import Divider from '../../base/Divider/Divider';
import TutorSignUpStep from '../TutorSignUpStep';
import TutorSignUpStepBody from '../TutorSignUpStepBody';
import TutorSignUpStepFooter from '../TutorSignUpStepFooter';
import TutorSignUpStepHeader from '../TutorSignUpStepHeader';
import { Phase } from './constants';
import OverviewPhase from './OverviewPhase';
import TestingPhase from './TestingPhase';

export default function TutorSignUpConnectionStep() {
  const [phase, setPhase] = useState<Phase>('overview');

  const handleGoToNextPhase = (currentPhase: Phase) => {
    if (currentPhase === 'overview') {
      setPhase('testing');
    }

    if (currentPhase === 'testing') {
      setPhase('complete');
    }
  };

  return (
    <TutorSignUpStep>
      {phase === 'complete' ? (
        <TutorSignUpStepHeader
          title="Internet Connection Test Complete"
          description="Good news, your computer and internet setup are 
          sufficient for tutoring on Cambly. Each time you log on to tutor, 
          we will run the same diagnostic test to prevent any connection 
          issues and ensure a smooth lesson experience."
        />
      ) : (
        <TutorSignUpStepHeader
          title="Let's test your connection"
          description="Our students learn best when technology is working smoothly."
        />
      )}
      <Divider mt={6.5} borderWidth={0} />
      <TutorSignUpStepBody>
        {phase === 'overview' && <OverviewPhase handleGoToNextPhase={handleGoToNextPhase} />}
        {phase === 'testing' && <TestingPhase />}
      </TutorSignUpStepBody>
      <TutorSignUpStepFooter>
        <Button type="contained" endIcon={<ArrowForwardIcon />} disabled>
          Submit
        </Button>
      </TutorSignUpStepFooter>
    </TutorSignUpStep>
  );
}
