import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {
  containerStyle,
  wrapperStyle,
  descriptionWrapperStyle,
  titleStyle,
  descriptionStyle,
  cardContainerStyle,
} from './style';
import TutorSignUpPlatformSelectorCard from './Card/TutorSignUpPlatformSelectorCard';
import { useHistory } from 'react-router-dom';

export default function TutorSignUpPlatformSelector() {
  const history = useHistory();

  const handleChooseCamblyPlatform = async () => {
    history.push('/tutorsignup/step/welcome');
  };

  const handleChooseCamblyKidsPlatform = () => {};

  return (
    <Box sx={wrapperStyle}>
      <Box sx={containerStyle}>
        <Box sx={descriptionWrapperStyle}>
          <Typography variant="h4" sx={titleStyle}>
            Where do you want to start?
          </Typography>
          <Typography sx={descriptionStyle}>
            You can come back to sign up for both platforms later
          </Typography>
        </Box>
        <Stack sx={cardContainerStyle}>
          <TutorSignUpPlatformSelectorCard
            onClick={handleChooseCamblyPlatform}
            imagePath="/images/tutor-sign-up/platforms/cam.png"
            imageAlt="platform-for-students-18+"
          >
            Cambly (students 18+)
          </TutorSignUpPlatformSelectorCard>
          <TutorSignUpPlatformSelectorCard
            imagePath="/images/tutor-sign-up/platforms/kids-bird.png"
            imageAlt="platform-for-kids"
          >
            Cambly Kids
          </TutorSignUpPlatformSelectorCard>
        </Stack>
      </Box>
    </Box>
  );
}
