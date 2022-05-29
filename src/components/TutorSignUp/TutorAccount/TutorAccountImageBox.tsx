import React from 'react';
import { Box } from '@mui/material';

export function TutorAccountImageBox({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        minHeight: '658px',
        flexDirection: 'column',
        justifyContent: 'center',

        img: {
          objectFit: 'cover',
          objectPosition: '100% 50%',
          width: '100%',
        },
      }}
    >
      <img src={imageSrc} alt={imageAlt} />
    </Box>
  );
}
