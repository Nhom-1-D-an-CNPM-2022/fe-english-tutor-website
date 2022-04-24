import React, { useState } from 'react';
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

  const infoTutor = (name: string, rating: number) => {
    return (
      <>
        <ListItemAvatar>
          <Avatar>
            <PersonOutlineIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
          }
        />
        <Link target="_blank" to="/">
          <IconButton edge="end" aria-label="comments">
            <AccountBoxIcon />
          </IconButton>
        </Link>
      </>
    );
  };

  const dataDate = ['00:00', '00:15', '00:30', ''];
  const dataLength = ['15 phút', '30 phút'];
  const dataTutor = [{ name: 'Anh Kiem', rating: 5 }];

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
          {type === 3 &&
            data.map((item: any, index: number) => {
              return <MenuItem value={item.name}>{infoTutor(item.name, item.rating)}</MenuItem>;
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
      content: 'Chọn Thời gian',
      func: choose(dataDate, 'Chọn Thời gian', handleChangeDate, date, 1),
    },
    {
      icon: <AccessAlarmIcon />,
      content: 'Độ dài Bài học',
      func: choose(dataLength, 'Độ dài Bài học', handleChangeLength, length, 2),
    },
    {
      icon: <PersonOutlineIcon />,
      content: 'Chọn Gia sư',
      func: choose(dataTutor, 'Chọn Gia sư', handleChangeTutor, tutor, 3),
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
                          <Button>Tiếp tục</Button>
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
