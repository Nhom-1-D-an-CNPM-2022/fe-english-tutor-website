import React from 'react';
import { Box, Typography } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Divider from '../../../base/Divider/Divider';
import TutorSignUpStepSection from '../../TutorSignUpStepSection';
import Button from '../../../base/Button/Button';

export default function ImportProfileSection() {
  return (
    <TutorSignUpStepSection>
      <Box>
        <Typography>
          You may import the entries you already submitted for your Cambly Kids profile. However,
          you should still go through each field and make the necessary edits to tailor it for adult
          students.
        </Typography>
        <Divider mt={1} mb={1} borderWidth={0} />
        <Button type="outlined" color="secondary" startIcon={<FileCopyIcon />}>
          Import cambly kids profile fields
        </Button>
      </Box>
    </TutorSignUpStepSection>
  );
}
