import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { DevelopmentEditActionBoxProps } from '../constants';
import EditActionBox from '../EditActionBox';

export default function DevelopmentEditActionBox({ currentValue }: DevelopmentEditActionBoxProps) {
  return (
    <EditActionBox>
      {currentValue &&
        currentValue.map((singleDevelopment, index) => (
          <Box
            key={index}
            sx={{
              '&:not(:last-of-type)': {
                marginBottom: '20px',
              },
            }}
          >
            <Stack direction="row" spacing={1}>
              <Typography>{singleDevelopment.title}</Typography>
              <Typography color="rgba(0, 0, 0, 0.54) !important">
                {singleDevelopment.tags.join(' • ')}
              </Typography>
            </Stack>
            <Typography variant="body2">{singleDevelopment.description}</Typography>
          </Box>
        ))}
    </EditActionBox>
  );
}
