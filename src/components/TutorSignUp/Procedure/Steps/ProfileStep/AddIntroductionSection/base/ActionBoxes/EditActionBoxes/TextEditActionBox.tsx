import React from 'react';
import { Typography } from '@mui/material';
import { TextEditActionBoxProps } from './constants';
import EditActionBox from './EditActionBox';

export default function TextEditActionBox({ currentValue }: TextEditActionBoxProps) {
  return (
    <EditActionBox>
      <Typography
        sx={{
          wordWrap: 'break-word',
        }}
      >
        {currentValue}
      </Typography>
    </EditActionBox>
  );
}
