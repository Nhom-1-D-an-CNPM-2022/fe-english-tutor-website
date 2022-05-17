import { Box, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ReservationOption, ScheduleWeekView } from '../../components';
import scheduleApi from '../../services/aixos/scheduleApi';
import './Reservation.scss';

export const Reservation = () => {
  const [listReservation, setListReservation] = useState([]);
  const [listReqReservation, setListReqReservation] = useState([]);

  const handleGetReservation = async () => {
    const response = await scheduleApi.getReservation();
    response.data.map((item: any) => {
      if (item.status === 'PENDING') {
        setListReqReservation((listReqReservation) => [...listReqReservation, item]);
      }
      if (item.status === 'ACCEPTED') {
        setListReservation((listReservation) => [...listReservation, item]);
      }
    });
  };
  const handleChangeListReqReservation = (id: string) => {
    const temp = listReqReservation.filter((item) => item._id != id);
    setListReqReservation([...temp]);
  };
  const handleChangeListReservation = (id: string) => {
    const temp = listReservation.filter((item) => item._id != id);
    setListReservation([...temp]);
  };
  useEffect(() => {
    handleGetReservation();
  }, []);
  return (
    <div className="reservation">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <div className="reservation__option">
              <ReservationOption
                reqReservation={listReqReservation}
                changeReqReservation={handleChangeListReqReservation}
              />
            </div>
          </Grid>
          <Grid item xs={9}>
            <div className="reservation__schedule">
              <ScheduleWeekView
                listReservation={listReservation}
                changeReservation={handleChangeListReservation}
              ></ScheduleWeekView>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
