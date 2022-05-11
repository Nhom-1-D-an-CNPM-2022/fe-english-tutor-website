import React from 'react';
import { LinearProgress as MuiLinearProgress, LinearProgressProps } from '@mui/material';
import style from './style';

export default function LinearProgress({ ...props }: Omit<LinearProgressProps, 'sx'>) {
  return <MuiLinearProgress {...props} sx={style} />;
}
