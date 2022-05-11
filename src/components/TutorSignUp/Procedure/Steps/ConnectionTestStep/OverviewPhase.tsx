import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Button from '../../base/Button/Button';
import { PhaseProps } from './constants';
import { gridContainerStyle, gridItemStyle, imageWrapperStyle } from './style';

export default function OverviewPhase({ handleGoToNextPhase }: PhaseProps) {
  return (
    <Grid sx={gridContainerStyle} container>
      <Grid sx={gridItemStyle} item xs={6}>
        <Box>
          <Box sx={imageWrapperStyle}>
            <img src="/images/tutor-sign-up/steps/connection-test/wifi.png" />
          </Box>
          <Typography>High-speed internet connection</Typography>
        </Box>
      </Grid>
      <Grid sx={gridItemStyle} item xs={6}>
        <Box>
          <Box sx={imageWrapperStyle}>
            <img src="/images/tutor-sign-up/steps/connection-test/webcam.png" />
          </Box>
          <Typography>Built-in or external webcam</Typography>
        </Box>
      </Grid>
      <Grid sx={gridItemStyle} item xs={6}>
        <Box>
          <Box sx={imageWrapperStyle}>
            <img src="/images/tutor-sign-up/steps/connection-test/lighting.png" />
          </Box>
          <Typography>Good lighting</Typography>
        </Box>
      </Grid>
      <Grid sx={gridItemStyle} item xs={6}>
        <Box>
          <Box sx={imageWrapperStyle}>
            <img src="/images/tutor-sign-up/steps/connection-test/radio.png" />
          </Box>
          <Typography>Microphone or headset</Typography>
        </Box>
      </Grid>
      <Grid sx={gridItemStyle} item xs={12}>
        <Typography>
          Start the test when you are ready with the setup you will use to tutor.
        </Typography>
      </Grid>
      <Grid sx={gridItemStyle} item xs={12}>
        <Button onClick={() => handleGoToNextPhase('overview')} type="contained" color="secondary">
          Smart test
        </Button>
      </Grid>
    </Grid>
  );
}
