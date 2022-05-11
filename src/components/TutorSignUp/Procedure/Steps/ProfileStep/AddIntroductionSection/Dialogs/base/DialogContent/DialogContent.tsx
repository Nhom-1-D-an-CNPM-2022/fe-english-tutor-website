import React from 'react';
import { DialogContent as MuiDialogContent, DialogContentProps } from '@mui/material';
import style from './style';

export default function DialogContent({ ...props }: DialogContentProps) {
  return <MuiDialogContent sx={style} {...props} />;
}
