import { Box, IconButton, Stack } from '@mui/material';
import TutorSignUpStepSection from '../../TutorSignUpStepSection';
import { innerWrapperStyle, profilePictureWrapperStyle, outerWrapperStyle } from './style';
import React, { useContext } from 'react';
import { ProfileStepContext } from '../../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';
import BasicInfoActionBox from '../AddIntroductionSection/base/ActionBoxes/BasicInfoActionBox';

export default function AddBasicInfoSection() {
  const { openEditProfilePictureDialog, openBasicInfoDialog, profile } =
    useContext(ProfileStepContext);

  return (
    <TutorSignUpStepSection sx={outerWrapperStyle}>
      <Stack sx={innerWrapperStyle}>
        <Box sx={profilePictureWrapperStyle}>
          <IconButton onClick={openEditProfilePictureDialog}>
            <img src={profile.profilePicture ? profile.profilePicture : '/images/avatar2.png'} />
          </IconButton>
        </Box>
        <BasicInfoActionBox
          currentValue={{
            displayName: profile.displayName,
            hometown: profile.hometown,
            dateOfBirth: profile.dateOfBirth,
            accent: profile.languages[0].dialect,
          }}
          description={[
            'Click on the profile picture to upload a new one.',
            'Add your display name and location.',
          ]}
          openDialogButtonLabel="Add basic info"
          editButtonLabel="Edit basic info"
          onClickButton={openBasicInfoDialog}
        />
      </Stack>
    </TutorSignUpStepSection>
  );
}
