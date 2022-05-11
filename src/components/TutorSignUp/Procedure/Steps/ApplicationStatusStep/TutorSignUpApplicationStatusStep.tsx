import React from 'react';
import TutorSignUpStep from '../TutorSignUpStep';
import TutorSignUpStepBody from '../TutorSignUpStepBody';
import TutorSignUpStepHeader from '../TutorSignUpStepHeader';

export default function TutorSignUpApplicationStatusStep() {
  return (
    <TutorSignUpStep>
      <TutorSignUpStepHeader
        title="Your profile is under review"
        description="In the meantime, you can access your profile and make any edits using the menu on the left"
      />
      <TutorSignUpStepBody></TutorSignUpStepBody>
    </TutorSignUpStep>
  );
}
