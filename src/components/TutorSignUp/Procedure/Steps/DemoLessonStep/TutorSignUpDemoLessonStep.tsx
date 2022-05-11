import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../base/Button/Button';
import VideoCard from '../../base/VideoCard/VideoCard';
import Divider from '../../base/Divider/Divider';
import TutorSignUpStep from '../TutorSignUpStep';
import TutorSignUpStepBody from '../TutorSignUpStepBody';
import TutorSignUpStepFooter from '../TutorSignUpStepFooter';
import TutorSignUpStepHeader from '../TutorSignUpStepHeader';

export default function TutorSignUpDemoLessonStep() {
  return (
    <TutorSignUpStep>
      <TutorSignUpStepHeader
        title="Demo lesson"
        description="Show off your ability to engage kids in English lessons with a 3-5 minute demo highlighting your teaching style. Using the provided sample lesson slides, please target your demo towards a 7-8 year old student with basic English knowledge. Make sure to use plenty of TPR to help our parents understand how their child can learn without translations!"
      />
      <Divider mt={4} mb={0} borderWidth={0} />
      <TutorSignUpStepBody>
        <VideoCard
          title="Demo lesson"
          description="Show off your ability to engage kids in English lessons with a 3-5 minute demo highlighting your teaching style. Using the provided sample lesson slides, please target your demo towards a 7-8 year old student with basic English knowledge. Make sure to use plenty of TPR to help our parents understand how their child can learn without translations!"
          links={[
            {
              href: 'https://cambly.s3-us-west-2.amazonaws.com/tutorguide/kids/Demo_CK.mp4',
              label: 'Watch an example',
            },
            {
              href: 'https://cambly.s3-us-west-2.amazonaws.com/tutorguide/kids/Cambly_Kids_Demo_Slides.pdf',
              label: 'Lesson slides',
            },
          ]}
          handleUpdateVideo={() => {}}
        />
      </TutorSignUpStepBody>
      <TutorSignUpStepFooter>
        <Button type="contained" endIcon={<ArrowForwardIcon />} disabled>
          Continue to connection test
        </Button>
      </TutorSignUpStepFooter>
    </TutorSignUpStep>
  );
}
