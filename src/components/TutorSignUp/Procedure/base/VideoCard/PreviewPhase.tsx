import React from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VideocamIcon from '@mui/icons-material/Videocam';
import { PreviewPhaseProps } from './constants';
import { previewVideoPhaseStyle } from './style';

export default function PreviewPhase({ previewSource, handleFileInputChange }: PreviewPhaseProps) {
  return (
    <Box sx={previewVideoPhaseStyle.wrapperStyle}>
      <video src={previewSource} controls />

      <Stack sx={previewVideoPhaseStyle.buttonContainerStyle}>
        <Link component="button" underline="hover">
          <span>
            <VideocamIcon />
          </span>
          <Typography variant="subtitle1">Record new</Typography>
        </Link>
        <Link
          component="label"
          underline="hover"
          sx={{
            cursor: 'pointer',
          }}
        >
          <span>
            <CloudUploadIcon />
          </span>
          <Typography variant="subtitle1">Upload new</Typography>
          <input onChange={handleFileInputChange} accept="video/*" type="file" hidden />
        </Link>
      </Stack>
    </Box>
  );
}
