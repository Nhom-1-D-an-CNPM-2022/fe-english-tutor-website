import React from 'react';
import { Box } from '@mui/material';
import style from './style';

export default function DialogContentActions({ children }: React.PropsWithChildren<{}>) {
  return <Box sx={style}>{children}</Box>;
}
