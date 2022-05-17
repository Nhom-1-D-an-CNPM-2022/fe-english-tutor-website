import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
} from '@mui/material';
import moment from 'moment';
import React from 'react';
import scheduleApi from '../../services/aixos/schedule';
import { RespondModal } from '../RespondModal/RespondModal';
import './ReservationOption.scss';
const displayOption = [
  'My Reservation Availability',
  'My Priority Hours(student can reserve)',
  'Student Reservations',
];
interface IReservationOption {
  reqReservation: any;
  changeReqReservation: any;
}
export const ReservationOption: React.FC<IReservationOption> = ({
  reqReservation,
  changeReqReservation,
}) => {
  const [hours, setHours] = React.useState('6');

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment !== null) {
      setHours(newAlignment);
    }
  };
  const handleAcceptReservation = async (bookingId: string, tutorResponse: string) => {
    const response = await scheduleApi.acceptReservation({
      bookingId: bookingId,
      tutorResponse: tutorResponse,
    });
    changeReqReservation(bookingId);
  };
  const handleRejectReservation = async (bookingId: string, tutorResponse: string) => {
    const response = await scheduleApi.rejectReservation({
      bookingId: bookingId,
      tutorResponse: tutorResponse,
    });
    changeReqReservation(bookingId);
  };
  return (
    <div className="reservation-option">
      <Card sx={{ maxWidth: 365, marginBottom: 3 }}>
        <CardHeader title="Reservation Request" />
        <CardContent>
          {reqReservation.map((item: any) => {
            return (
              <>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  display="flex"
                  alignItems="center"
                  marginBottom="10px"
                  key={item._id}
                >
                  <Typography variant="body2" color="text.secondary" marginRight={2}>
                    {item.tutee.fullname}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {moment(item.schedule.startTime).format('hh:mm DD/MM/YYYY')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.schedule.interval} minutes
                    </Typography>
                  </Box>
                  <RespondModal
                    reqReservation={item}
                    handleAcceptReservation={handleAcceptReservation}
                    handleRejectReservation={handleRejectReservation}
                  />
                </Typography>
              </>
            );
          })}
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 365, marginBottom: 3 }}>
        <CardHeader title="Canlendar Display" />
        <CardContent>
          {displayOption.map((item: any, index: number) => {
            return <FormControlLabel control={<Checkbox />} label={item} key={index} name={item} />;
          })}
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 365, marginBottom: 3 }}>
        <CardHeader title="Reservation Setting" />
        <CardContent>
          <Typography variant="body2" color="text.secondary" display="flex" alignItems="center">
            Minumum Advance Notice:
            <Stack direction="row" spacing={4} marginRight={1} marginLeft={1}>
              <ToggleButtonGroup
                value={hours}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                size="small"
              >
                <ToggleButton value="6" aria-label="left aligned">
                  6
                </ToggleButton>
                <ToggleButton value="12" aria-label="centered">
                  12
                </ToggleButton>
                <ToggleButton value="24" aria-label="right aligned">
                  24
                </ToggleButton>
              </ToggleButtonGroup>
            </Stack>
            Hours
          </Typography>
          <Typography variant="body2" color="text.secondary">
            *Time during booked Priority Hours can always be reserved up to two hours in advance.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 365 }}>
        <CardHeader title="My Reservation URL >" />
      </Card>
    </div>
  );
};
