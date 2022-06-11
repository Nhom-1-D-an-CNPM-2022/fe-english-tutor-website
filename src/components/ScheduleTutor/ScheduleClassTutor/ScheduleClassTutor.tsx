import React, { useState } from 'react';
import './ScheduleClassTutor.scss';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
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
} from '@mui/material';

import scheduleApi from '../../../services/aixos/scheduleApi';
import Swal from 'sweetalert2';

interface IScheduleClass {
  day: number;
  month: number;
  year: number;
  weeksday: string;
}

export const ScheduleClassTutor = ({ day, month, year, weeksday }: IScheduleClass) => {
  const className = 'scheduleClassTutor';

  const [date, setDate] = useState('');
  const [length, setLength] = useState('');

  const handleChangeDate = (event: any) => {
    setDate(event.target.value as string);
  };

  const handleChangeLength = (event: any) => {
    setLength(event.target.value as string);
  };

  const handleClick = async () => {
    if (date == '' || length == '') {
      return;
    }

    const time = date.split(':');
    const startDate = new Date(
      year,
      month,
      day,
      Number(time[0]),
      Number(time[1]),
      0,
      0,
    ).toISOString();

    const schedule = {
      startTime: startDate,
      interval: length.slice(0, 2),
      isBooked: false,
    };
    scheduleApi
      .createSchedule({ schedule: schedule })
      .then(function (response: any) {
        Swal.fire({
          icon: 'success',
          title: 'Tạo lịch dạy mới thành công.',
        });
      })
      .catch(function (error: any) {
        Swal.fire({
          icon: 'error',
          title: 'Tạo lịch dạy mới thất bại.',
        });
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

  const dataTimeStart = generateDate();
  const dataLength = ['15 phút', '30 phút'];

  const choose = (
    data: Array<any>,
    title: string,
    handleChange: any,
    value: string,
    type: number,
  ) => {
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
        </Select>
      </FormControl>
    );
  };

  const itemClass = [
    {
      icon: <EventIcon />,
      content: `${weeksday} ${day} tháng ${month + 1} năm ${year}`,
      func: false,
    },
    {
      icon: <AccessTimeIcon />,
      content: 'Chọn Thời gian bắt đầu',
      func: choose(dataTimeStart, 'Chọn Thời gian', handleChangeDate, date, 1),
    },
    {
      icon: <AccessAlarmIcon />,
      content: 'Độ dài Bài học',
      func: choose(dataLength, 'Độ dài Bài học', handleChangeLength, length, 2),
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
                        subheader={<ListSubheader>Lên lịch Một buổi học</ListSubheader>}
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
                          <Button disabled={length !== '' && date !== '' ? false : true}>
                            Tạo Buổi Dạy
                          </Button>
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
