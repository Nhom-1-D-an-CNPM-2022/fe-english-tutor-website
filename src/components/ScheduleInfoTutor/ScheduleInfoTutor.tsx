import React from 'react';
import './ScheduleInfoTutor.scss';

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

export const ScheduleInfoTutor = () => {
  const className = 'scheduleInfo';
  const location = useLocation();
  const state: any = location.state;

  return (
    <Container fixed>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CloseIcon fontSize="small" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Ngày dạy - ${state.day}/${state.month}/${state.year}`}
          />
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
          <Button variant="contained" className={`${className}__btn`}>
            Gửi
          </Button>
        </ListItem>
      </List>
    </Container>
  );
};
