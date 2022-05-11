import React, { ReactNode } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import {
  cardContentStyle,
  cardMediaStyle,
  cardMediaWrapperStyle,
  cardStyle,
  platformNameStyle,
} from './style';

interface Props {
  imagePath: string;
  imageAlt?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function TutorSignUpPlatformSelectorCard({
  imagePath,
  imageAlt,
  onClick,
  children,
}: Props) {
  return (
    <Card sx={cardStyle} onClick={onClick}>
      <Box sx={cardMediaWrapperStyle}>
        <CardMedia sx={cardMediaStyle} component="img" image={imagePath} alt={imageAlt} />
      </Box>

      <CardContent sx={cardContentStyle}>
        <Typography variant="h5" sx={platformNameStyle}>
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
}
