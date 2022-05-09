import { Box, Grid } from '@mui/material';
import React from 'react';
import { ReservationOption, ScheduleWeekView } from '../../components';
import './Reservation.scss';

export const Reservation = () => {
  return (
    <div className="reservation">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <div className="reservation__option">
              <ReservationOption />
            </div>
          </Grid>
          <Grid item xs={9}>
            <div className="reservation__schedule">
            <ScheduleWeekView></ScheduleWeekView>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
