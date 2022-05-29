import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';
import style from './style';

interface Props extends Omit<CheckboxProps, 'sx' | 'control'> {}

export default function Checkbox({ ...props }: Props) {
  return <MuiCheckbox {...props} sx={style} />;
}
