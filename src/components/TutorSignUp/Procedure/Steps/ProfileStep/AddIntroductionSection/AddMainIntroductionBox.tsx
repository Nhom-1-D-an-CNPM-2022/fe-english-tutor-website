import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { ProfileStepContext } from '../../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';
import VideoCard from '../../../base/VideoCard/VideoCard';
import Divider from '../../../base/Divider/Divider';
import TextActionBox from './base/ActionBoxes/TextActionBox';
import { MAIN_INTRODUCTION } from './constants';

export default function AddMainIntroductionBox() {
  const { profile, openAddIntroductionDialog, handleUpdateProfileMedia } =
    useContext(ProfileStepContext);

  return (
    <Box>
      <VideoCard
        videoSrc={profile.videoIntroduction}
        title={MAIN_INTRODUCTION.VIDEO_CARD.TITLE}
        description={MAIN_INTRODUCTION.VIDEO_CARD.DESCRIPTION}
        links={MAIN_INTRODUCTION.VIDEO_CARD.LINKS}
        handleUpdateVideo={handleUpdateProfileMedia}
      />
      <Divider mt={2.5} mb={2.5} borderWidth={0} />
      <TextActionBox
        currentValue={profile.introduction}
        title={profile.displayName ? profile.displayName : profile.userId}
        titleSize="normal"
        description={MAIN_INTRODUCTION.DESCRIPTION}
        openDialogButtonLabel="Add introduction"
        onClickButton={openAddIntroductionDialog}
      />
    </Box>
  );
}
