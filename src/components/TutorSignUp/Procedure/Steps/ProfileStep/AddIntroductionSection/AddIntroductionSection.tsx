import React from 'react';
import Divider from '../../../base/Divider/Divider';
import TutorSignUpStepSection from '../../TutorSignUpStepSection';
import AddMainIntroductionBox from './AddMainIntroductionBox';
import AddSupplementalIntroductionBox from './AddSupplementalIntroductionBox';

export default function AddIntroductionSection() {
  return (
    <TutorSignUpStepSection>
      <AddMainIntroductionBox />
      <Divider mt={2.5} mb={2.5} />
      <AddSupplementalIntroductionBox />
    </TutorSignUpStepSection>
  );
}
