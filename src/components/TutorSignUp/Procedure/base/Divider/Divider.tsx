import React from 'react';
import { Divider as MuiDivider } from '@mui/material';

interface Props {
  mt?: number;
  mb?: number;
  borderWidth?: number;
}

function Divider({ mt, mb, borderWidth }: Props) {
  return (
    <MuiDivider
      sx={{
        marginTop: mt,
        marginBottom: mb,
        borderColor: 'rgba(0, 0, 0, 0.09)',
        borderBottomWidth: borderWidth,
      }}
    />
  );
}

Divider.defaultProps = {
  mt: 0,
  mb: 0,
  borderWidth: 1,
};

export default Divider;
