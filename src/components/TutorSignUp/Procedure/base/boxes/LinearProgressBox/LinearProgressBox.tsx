import React, { ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import style, { labelWrapperStyle, linearProgressWrapperStyle } from './style';

interface Props {
  children: ReactNode;
  leftLabel?: string;
  rightLabel?: string;
}

export default function LinearProgressBox({ children, leftLabel, rightLabel }: Props) {
  return (
    <Stack sx={style}>
      <Box sx={labelWrapperStyle}>
        <Typography>{leftLabel}</Typography>
      </Box>
      <Box sx={linearProgressWrapperStyle}>{children}</Box>
      <Box sx={labelWrapperStyle}>
        <Typography>{rightLabel}</Typography>
      </Box>
    </Stack>
  );
}
