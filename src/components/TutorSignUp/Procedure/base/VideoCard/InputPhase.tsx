import React, { useContext } from 'react';
import { Box, CardActions, CardContent, Link, Stack, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VideocamIcon from '@mui/icons-material/Videocam';
import { inputVideoPhaseStyle } from './style';
import Button from '../Button/Button';
import { InputPhaseProps } from './constants';
import { ProfileStepContext } from '../../../../../contexts/TutorSignUpProcedure/ProfileStepContext';

export default function InputPhase({
  title,
  description,
  links,
  handleFileInputChange,
}: InputPhaseProps) {
  const { openRecordDialog } = useContext(ProfileStepContext);

  return (
    <Box sx={inputVideoPhaseStyle.outerWrapperStyle}>
      <Box sx={inputVideoPhaseStyle.innerWrapperStyle}>
        <CardContent sx={inputVideoPhaseStyle.cardContentStyle}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle1">{description}</Typography>
        </CardContent>
        <CardActions sx={inputVideoPhaseStyle.cardActionsStyle}>
          <Stack sx={inputVideoPhaseStyle.buttonContainerStyle}>
            <Button
              type="outlined"
              size="small"
              color="white"
              startIcon={<CloudUploadIcon />}
              component="label"
            >
              Upload
              <input onChange={handleFileInputChange} accept="video/*" type="file" hidden />
            </Button>
            <Button
              type="outlined"
              size="small"
              color="white"
              startIcon={<VideocamIcon />}
              onClick={openRecordDialog}
            >
              Record
            </Button>
          </Stack>
          <Stack sx={inputVideoPhaseStyle.linkContainerStyle}>
            {links?.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                underline="always"
                target="_blank"
                rel="noopener"
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </CardActions>
      </Box>
    </Box>
  );
}
