import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import getStyle from './dialogTextField.getStyle';

interface Props extends Omit<TextFieldProps, 'variant' | 'fullWidth' | 'focused'> {
  color?: 'primary' | 'secondary';
  variant?: 'text' | 'multiline' | 'select';
}

export default function DialogTextField({ color = 'primary', variant = 'text', ...rest }: Props) {
  return (
    <TextField
      {...rest}
      sx={getStyle(color)}
      variant="outlined"
      InputLabelProps={
        variant === 'text'
          ? {
              shrink: true,
            }
          : {}
      }
      fullWidth
    />
  );
}
