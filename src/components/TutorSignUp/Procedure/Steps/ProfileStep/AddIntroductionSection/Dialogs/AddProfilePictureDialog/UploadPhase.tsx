import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Typography } from '@mui/material';
import Button from '../../../../../base/Button/Button';
import constants from './constants';

interface Props {
  handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadPhase({ handleFileInputChange }: Props) {
  return (
    <Box>
      <Typography>{constants.DESCRIPTION}</Typography>
      <Box p={2}>
        <Button type="text" size="large" component="label" startIcon={<CloudUploadIcon />}>
          <input
            onChange={(e) => handleFileInputChange(e)}
            type="file"
            accept=".png, .jpg, .jpeg"
            hidden
          />
          Upload new photo
        </Button>
      </Box>
    </Box>
  );
}
