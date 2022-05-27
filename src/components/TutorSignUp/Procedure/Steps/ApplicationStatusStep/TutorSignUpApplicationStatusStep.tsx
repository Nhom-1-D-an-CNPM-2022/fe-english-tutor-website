import React from 'react';
import { Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Divider from '../../base/Divider/Divider';
import TutorSignUpStep from '../TutorSignUpStep';
import TutorSignUpStepBody from '../TutorSignUpStepBody';
import TutorSignUpStepHeader from '../TutorSignUpStepHeader';
import style from './style';
import { TutorSignUpProcedureContext } from '../../../../../contexts/TutorSignUp/TutorSignUpProcedure/TutorSignUpProcedureContext';

export default function TutorSignUpApplicationStatusStep() {
  const { profile } = React.useContext(TutorSignUpProcedureContext);

  return (
    <TutorSignUpStep>
      <TutorSignUpStepHeader
        title="Your profile is under review"
        description="In the meantime, you can access your profile and make any edits using the menu on the left"
      />
      <Divider mt={6} borderWidth={0} />
      <TutorSignUpStepBody>
        <Box sx={style}>
          {profile.isSubmitted ? (
            profile.isApproved ? (
              <CheckIcon />
            ) : (
              <ClearIcon />
            )
          ) : (
            <MoreHorizIcon />
          )}
        </Box>
      </TutorSignUpStepBody>
    </TutorSignUpStep>
  );
}
