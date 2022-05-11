import React from 'react';
import { Box, Stack, Tooltip, Typography } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { BasicInfoEditActionBoxProps } from '../constants';
import EditActionBox from '../EditActionBox';
import { accentBadgeStyle, newTalentStyle } from './style';
import { accentBadges } from './constants';

export default function BasicInfoEditActionBox({ currentValue }: BasicInfoEditActionBoxProps) {
  return (
    <EditActionBox>
      <Typography variant="h5">{currentValue?.displayName}</Typography>
      <Stack flexDirection="row">
        <Box sx={newTalentStyle.wrapperStyle} component="span">
          <WhatshotIcon sx={newTalentStyle.iconStyle} />
          <Typography sx={newTalentStyle.typoStyle} component="span">
            new talent
          </Typography>
        </Box>
        <Box sx={accentBadgeStyle.wrapperStyle}>
          <Tooltip title={`${currentValue?.accent} Accent`} arrow>
            <Box sx={accentBadgeStyle.imageWrapperStyle}>
              <img src={accentBadges[currentValue?.accent as keyof typeof accentBadges]} />
            </Box>
          </Tooltip>
          <Typography sx={accentBadgeStyle.typoStyle}>{currentValue?.hometown}</Typography>
        </Box>
      </Stack>
    </EditActionBox>
  );
}
