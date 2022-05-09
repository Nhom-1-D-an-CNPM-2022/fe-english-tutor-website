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
  } from '@mui/material';
  import React from 'react';
  import { RespondModal } from '../RespondModal/RespondModal';
  import './ReservationOption.scss';
  const displayOption = [
    'My Reservation Availability',
    'My Priority Hours(student can reserve)',
    'Student Reservations',
  ];
  export const ReservationOption = () => {
    const [hours, setHours] = React.useState('6');
  
    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
      if (newAlignment !== null) {
        setHours(newAlignment);
      }
    };
  
    return (
      <div className="reservation-option">
          <Card sx={{ maxWidth: 365, marginBottom: 3 }}>
          <CardHeader title="Reservation Request" />
          <CardContent>
          <Typography variant="body2" color="text.secondary" display="flex" alignItems="center">
          <Typography variant="body2" color="text.secondary" marginRight={2}>Đức</Typography>
          <Typography variant="body2" color="text.secondary">26/4/3000 Sa Đéc đồng tháp</Typography>
          <RespondModal/>
          </Typography>
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
  