import React from 'react';
import { Box, Typography } from '@mui/material';
import AuthenticationBox from './AuthenticationBox';

export interface FormBodyProps {
  authType: 'signup' | 'login';
  prompt: string;
}

export default function FormBody({ authType, prompt }: FormBodyProps) {
  return (
    <Box>
      <Typography variant="h6" marginBottom={1.875}>
        {prompt}
      </Typography>
      <AuthenticationBox authType={authType} />
    </Box>
  );
}
