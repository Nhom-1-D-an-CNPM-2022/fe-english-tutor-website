import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '../../../../../../base/Button/Button';
import { InputActionBoxProps } from '../constants';
import style from './style';

export default function InputActionBox({
  description,
  openDialogButtonLabel,
  onClickButton,
}: InputActionBoxProps) {
  return (
    <Box sx={style}>
      {Array.isArray(description) ? (
        description.map((paragraph) => (
          <Typography key={paragraph} variant="subtitle1">
            {paragraph}
          </Typography>
        ))
      ) : (
        <Typography variant="subtitle1">{description}</Typography>
      )}
      <Button type="outlined" size="large" onClick={onClickButton}>
        {openDialogButtonLabel}
      </Button>
    </Box>
  );
}
