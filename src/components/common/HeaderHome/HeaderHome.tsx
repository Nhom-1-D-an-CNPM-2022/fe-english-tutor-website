import React, { useState } from 'react';
import './HeaderHome.scss';

import { AppBar, Toolbar, FormControl, Select, MenuItem, Button } from '@mui/material';
import { Link, useHistory, useLocation } from 'react-router-dom';

export const HeaderHome = () => {
  const className = 'header-home';
  const history = useHistory();
  const location = useLocation().pathname;
  const [language, setLanguage] = useState(0);

  const handleChooseLaguage = (e: any) => {
    setLanguage(e.target.value);
  };

  const handleClickLogin = () => {
    history.push('/student/login');
  };

  const handleClickRegister = () => {
    history.push('/student/register');
  };

  return (
    <AppBar position={location === '/home' ? 'fixed' : 'static'}>
      <Toolbar sx={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between' }}>
        <div className={className}>
          <div className={`${className}__left`}>
            <Link to="/" className={`${className}__logo`}>
              <img src="https://www.cambly.com/fe/static/logos/sm/primary.png" alt="Logo" />
            </Link>
            <Link to="#">
              <Button variant="text" sx={{ color: '#353535' }}>
                Dành Cho Các Tổ Chức
              </Button>
            </Link>
            <Link to="#">
              <Button variant="text" sx={{ color: '#353535' }}>
                Dành cho Trẻ em
              </Button>
            </Link>
            <Link to="#">
              <Button variant="text" sx={{ color: '#353535' }}>
                Các Khóa Học Của Chúng Tôi
              </Button>
            </Link>
          </div>
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
        </div>
      </Toolbar>
    </AppBar>
  );
};
