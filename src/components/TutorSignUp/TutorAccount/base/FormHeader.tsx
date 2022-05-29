import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { LoginWithSocial } from '../../../LoginWithSocial/LoginWithSocial';

export interface FormHeaderProps {
  title: string;
  thirdPartyPrompt: string;
}

export default function FormHeader({ title, thirdPartyPrompt }: FormHeaderProps) {
  return (
    <Box>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h6" marginY={1.875}>
        {thirdPartyPrompt}
      </Typography>
      <Box marginBottom={3}>
        <LoginWithSocial />
      </Box>
      <Divider
        sx={{
          marginBottom: 3,
        }}
      >
        or
      </Divider>
    </Box>
  );
}
