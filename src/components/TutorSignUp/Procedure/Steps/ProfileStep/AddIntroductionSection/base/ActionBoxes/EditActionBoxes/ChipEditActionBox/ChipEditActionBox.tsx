import React from 'react';
import { Chip } from '@mui/material';
import { ChipEditActionBoxProps } from '../constants';
import EditActionBox from '../EditActionBox';
import { chipStyle } from './style';

export default function ChipEditActionBox({ currentValue }: ChipEditActionBoxProps) {
  return (
    <EditActionBox>
      {currentValue &&
        currentValue.map((label) => (
          <Chip sx={chipStyle} key={label} label={label} variant="outlined" />
        ))}
    </EditActionBox>
  );
}
