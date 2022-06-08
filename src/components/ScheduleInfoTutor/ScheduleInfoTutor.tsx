import React, { useCallback, useEffect, useState } from 'react';
import './ScheduleInfoTutor.scss';
import axios from 'axios';

import {
  Avatar,
  Button,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextareaAutosize,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotesIcon from '@mui/icons-material/Notes';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getInfo } from '../../redux/slice/appSlice/userSlice';
import { RootState } from '../../redux/rootReducer';
import { colors } from '@material-ui/core';
export const ScheduleInfoTutor = () => {
  const [items, setItems] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const className = 'scheduleInfo';
  const location = useLocation();
  const state: any = location.state;
  const user = useSelector((state: RootState) => state.userSlice);
  const handleClick = useCallback ( async () => {
    if (isSending) return

    setIsSending(true)

    // console.log(state);
    // console.log(localStorage.getItem('accessToken'));
    // console.log('user', user);
    // console.log('id', user.account._id);
    const startDate = new Date(state.year, state.month, state.day).toISOString();
    //console.log(startDate);
    const scheduleTimeBody = {
      scheduleTime: [
        {
          time: startDate,
          interval: 15,
        },
      ],
    };
    const requestOptions = {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
      data: scheduleTimeBody,
    };
    console.log(localStorage.getItem('accessToken'));
    
    const response = await axios.post(`${process.env.URL_MY_API}schedule`, requestOptions, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    // fetch(`${process.env.URL_MY_API}schedule`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('accessToken')}` 
    //   },
    //   body: JSON.stringify({
    //     scheduleTime: [
    //       {
    //         time: startDate,
    //         interval: 15,
    //       },
    //     ],
    //   }),
    // });

  
  }, [isSending]);

  return (
    <Container fixed>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CloseIcon fontSize="small" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`Ngày dạy - ${state.day}/${state.month}/${state.year}`} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccessTimeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${state.day} tháng ${state.month} năm ${state.year}`}
            secondary={`${state.date} - ${state.length}`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CalendarMonthIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Thêm vào lịch Google" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <NotesIcon />
            </Avatar>
          </ListItemAvatar>
          <TextareaAutosize
            aria-label="note"
            minRows={6}
            placeholder="(Tùy chọn) Thêm một ghi chú..."
            style={{ width: 300, border: '1px solid #000', padding: '8px' }}
          />
        </ListItem>
        <ListItem>
          <Button variant="contained" className={`${className}__btn`} onClick={handleClick}>
            Gửi
          </Button>
        </ListItem>
      </List>
    </Container>
  );
};
