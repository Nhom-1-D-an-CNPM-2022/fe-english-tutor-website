import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import style from './style';

interface Props {
  width?: string;
  height?: string;
  margin?: string | number;
  children: ReactNode;
}

export default function MediaWrapperBox({
  width = '100%',
  height = '100%',
  margin,
  children,
}: Props) {
  return (
    <Box sx={style} width={width} height={height} margin={margin}>
      {children}
    </Box>
  );
}
