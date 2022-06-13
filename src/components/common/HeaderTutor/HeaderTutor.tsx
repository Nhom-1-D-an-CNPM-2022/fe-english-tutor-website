import React, { useState, useContext } from 'react';
import './HeaderTutor.scss';

import {
  AppBar,
  Toolbar,
  FormControl,
  Select,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import { MenuUser } from '../Header/MenuUser/MenuUser';
import { RootState } from '../../../redux';
import { useSelector } from 'react-redux';
import Context from '../../../containers/State/Context';

export const HeaderTutor = () => {
  const className = 'header-tutor';
  const history = useHistory();
  const [language, setLanguage] = useState(0);
  const isAccount = useSelector((state: RootState) => state.userSlice.isAccount);

  const handleLogout = () => {
    localStorage.setItem('accessToken', '');
  };

  const handleChooseLaguage = (e: any) => {
    setLanguage(e.target.value);
  };

  const handleClickLogin = () => {
    history.push('/tutor/login');
  };

  const handleClickRegister = () => {
    history.push('/tutor/register');
  };

  const { receiveCall, setReceiveCall, decline, otherUserAccount } = useContext(Context);

  console.log(otherUserAccount);

  return (
    <AppBar position="static" sx={{ boxShadow: 'none' }}>
      <Dialog
        open={receiveCall}
        onClose={() => {
          setReceiveCall(false);
          decline();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Cuộc gọi</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* {otherUserAccount.fullname} đang gọi đến */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setReceiveCall(false);
              decline();
            }}
          >
            Tắt
          </Button>
          <Button
            onClick={() => {
              history.push('/videoCall');
            }}
            autoFocus
          >
            Nghe
          </Button>
        </DialogActions>
      </Dialog>

      <Toolbar sx={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between' }}>
        <div className={className}>
          <div className={`${className}__left`}>
            <Link to="/" className={`${className}__logo`}>
              <img src="https://www.cambly.com/fe/static/logos/sm/primary.png" alt="Logo" />
            </Link>
            {isAccount && (
              <>
                <Link to="/tutors/profile/me">
                  <Button variant="text" sx={{ color: '#353535' }}>
                    Thông Tin Gia Sư
                  </Button>
                </Link>
                <Link to="/tutors/schedule/create">
                  <Button variant="text" sx={{ color: '#353535' }}>
                    Lên Lịch Giảng Dạy
                  </Button>
                </Link>
                <Link to="/tutor/reservation">
                  <Button variant="text" sx={{ color: '#353535' }}>
                    Danh Sách Học Viên
                  </Button>
                </Link>
              </>
            )}
            <Link to="/log-out" onClick={handleLogout}>
              <Button variant="text" sx={{ color: '#353535' }}>
                <b>Đăng Xuất</b>
              </Button>
            </Link>
          </div>
          {!isAccount && (
            <div className={`${className}__right`}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select value={language} displayEmpty onChange={handleChooseLaguage}>
                  <MenuItem value={0}>Tiếng Việt</MenuItem>
                  <MenuItem value={1}>Tiếng Anh</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="text"
                sx={{ color: '#353535', margin: '0 10px 0 10px', textTransform: 'none' }}
                onClick={handleClickLogin}
              >
                Đăng Nhập
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: '0 10px 0 10px',
                  textTransform: 'none',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
                onClick={handleClickRegister}
              >
                Đăng Ký
              </Button>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
