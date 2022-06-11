import React from 'react';
import { Box, Link, Typography } from '@mui/material';

export interface FormFooterProps {
  navPrompt: string;
  navLinkLabel: string;
  navLink: string;
}

export default function FormFooter({ navPrompt, navLinkLabel, navLink }: FormFooterProps) {
  return (
    <Box marginTop={2}>
      <Typography variant="h6">
        {navPrompt} <Link href={navLink}>{navLinkLabel}</Link>
      </Typography>
    </Box>
  );
}
