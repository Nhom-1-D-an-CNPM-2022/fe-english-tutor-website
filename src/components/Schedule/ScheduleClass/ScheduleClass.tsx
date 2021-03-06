import React, { useState, useEffect } from 'react';
import './ScheduleClass.scss';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {
  IconButton,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Button,
  Grid,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListItemAvatar,
  Avatar,
  Rating,
} from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import scheduleApi from '../../../services/aixos/scheduleApi';

interface IScheduleClass {
  day: number;
  month: number;
  year: number;
  weeksday: string;
}

export const ScheduleClass = ({ day, month, year, weeksday }: IScheduleClass) => {
  const className = 'scheduleClass';
  const history = useHistory();

  const [date, setDate] = useState('');
  const [length, setLength] = useState('');
  const [tutor, setTutor] = useState('');

  const handleChangeDate = (event: any) => {
    setDate(event.target.value as string);
  };

  const handleChangeLength = (event: any) => {
    setLength(event.target.value as string);
  };

  const handleChangeTutor = (event: any) => {
    setTutor(event.target.value as string);
  };

  const handleClick = () => {
    history.push({
      pathname: `/student/schedule/123`,
      state: { day: day, month: month, year: year, date: date, length: length, tutor: tutor },
    });
  };

  const generateDate = () => {
    let currentDay = new Date().toDateString();
    let dayString = new Date(year, month, day).toDateString();
    let currentHour = 0;
    let minute = 0;
    const date: Array<string> = [];

    if (currentDay == dayString) {
      currentHour = new Date().getHours();
      minute = new Date().getMinutes() + (15 - (new Date().getMinutes() % 15));
    }

    for (let i = currentHour; i < 24; i++) {
      while (minute < 60) {
        date.push(`${i}:${minute === 0 ? '00' : minute}`);
        minute += 15;
      }

      minute = 0;
    }

    return date;
  };

  const listTutors = async () => {
    if (date == '' || length == '') {
      return;
    }

    const time = date.split(':');
    const currentDate = new Date(
      year,
      month,
      day,
      Number(time[0]),
      Number(time[1]),
      0,
      0,
    ).toISOString();

    const schudule: any = await scheduleApi.getSchedule({
      startTime: currentDate,
      interval: length.slice(0, 2),
    });

    setDataTutor(schudule.data);
  };

  const dataDate = generateDate();
  const dataLength = ['15 ph??t', '30 ph??t'];
  const [dataTutor, setDataTutor] = useState([]);

  useEffect(() => {
    listTutors();
  }, [date, length]);

  const choose = (data: any, title: string, handleChange: any, value: string, type: number) => {
    const disabled = type !== 1 && date === '';

    return (
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id={title}>{title}</InputLabel>
        <Select
          labelId={title}
          id={`${title}-select`}
          value={value}
          onChange={handleChange}
          autoWidth
          label={title}
          disabled={disabled}
        >
          {type != 3 &&
            data.map((item: string, index: number) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          {type === 3 &&
            date &&
            length &&
            data.map((item: any, index: number) => {
              return (
                <MenuItem value={item}>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonOutlineIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.tutor.displayName}
                    secondary={
                      <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                    }
                  />
                  <Link target="_blank" to="/">
                    <IconButton edge="end" aria-label="comments">
                      <AccountBoxIcon />
                    </IconButton>
                  </Link>
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    );
  };

  const itemClass = [
    {
      icon: <EventIcon />,
      content: `${weeksday} ${day} th??ng ${month + 1} n??m ${year}`,
      func: false,
    },
    {
      icon: <AccessTimeIcon />,
      content: 'Ch???n Th???i gian',
      func: choose(dataDate, 'Ch???n Th???i gian', handleChangeDate, date, 1),
    },
    {
      icon: <AccessAlarmIcon />,
      content: '????? d??i B??i h???c',
      func: choose(dataLength, '????? d??i B??i h???c', handleChangeLength, length, 2),
    },
    {
      icon: <PersonOutlineIcon />,
      content: 'Ch???n Gia s??',
      func: choose(dataTutor, 'Ch???n Gia s??', handleChangeTutor, tutor, 3),
    },
  ];

  return (
    <>
      <PopupState variant="popover" popupId="schudule-class">
        {(popupState) => (
          <div>
            <IconButton {...bindTrigger(popupState)}>
              <AddCircleOutlineIcon />
            </IconButton>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div className={className}>
                      <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        subheader={<ListSubheader>L??n l???ch M???t bu???i h???c</ListSubheader>}
                      >
                        {itemClass.map((item: any, index: number) => {
                          return (
                            <ListItem key={index}>
                              <ListItemIcon>{item.icon}</ListItemIcon>
                              {item.func ? item.func : <ListItemText primary={item.content} />}
                            </ListItem>
                          );
                        })}
                        <div className={`${className}__btn`} onClick={handleClick}>
                          <Button>Ti???p t???c</Button>
                        </div>
                      </List>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    </>
  );
};
