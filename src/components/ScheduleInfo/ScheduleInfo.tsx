import React, { useState } from 'react';
import './ScheduleInfo.scss';

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

import { useLocation, useHistory } from 'react-router-dom';
import bookingApi from '../../services/aixos/booking';
import Swal from 'sweetalert2';

export const ScheduleInfo = () => {
  const className = 'scheduleInfo';
  const location = useLocation();
  const state: any = location.state;
  const history = useHistory();
  const [note, setNote] = useState('');

  const handleClick = async () => {
    const booking = {
      scheduleId: state.tutor._id,
      tuteeRequest: note,
    };

    const data = await bookingApi.bookLesson({ ...booking });

    if (data.data) {
      Swal.fire({
        title: 'Thành Công!',
        text: 'Quá trình đăng ký hoàn tất',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      history.push('/student/schedule');

      return;
    }

    Swal.fire({
      title: 'Thất Bại!',
      text: 'Quá trình đăng ký xảy ra lỗi',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  };

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
            primary={`Bài học với ${state.tutor.tutor.displayName} - ${state.day}/${state.month}/${state.year}`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PersonOutlineIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={state.tutor.tutor.displayName} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccessTimeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`chủ nhật ${state.day} tháng ${state.month} năm ${state.year}`}
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
            onChange={(e: any) => setNote(e.target.value)}
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
