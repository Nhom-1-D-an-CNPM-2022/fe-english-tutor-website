import React from 'react';
import { Box } from '@mui/material';

interface Props {
  previewSource: string;
}

export default function EditPhase({ previewSource }: Props) {
  return (
    <Box>
      <Box width="120px" height="120px" marginX="auto">
        <img
          style={{
            borderRadius: '50%',
          }}
          src={previewSource}
        />
      </Box>
    </Box>
  );
}
