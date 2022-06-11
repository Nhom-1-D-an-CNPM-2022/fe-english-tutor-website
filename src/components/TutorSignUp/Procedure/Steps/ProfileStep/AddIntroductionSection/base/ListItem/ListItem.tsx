import { ListItem as MuiListItem } from '@mui/material';
import React, { ReactNode } from 'react';
import { wrapperStyle } from './style';

interface Props {
  children: ReactNode;
}

export default function ListItem({ children }: Props) {
  return <MuiListItem sx={wrapperStyle}>{children}</MuiListItem>;
}
