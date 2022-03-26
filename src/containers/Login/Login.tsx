import { Button } from '@mui/material';
import React from 'react';
import { LoginWithForm, LoginWithSocial } from '../../components';
import './Login.scss';

export const Login = () => {
  return (
    <div className="login">
      <div className="login__img">
        <img src="https://www.cambly.com/fe/static/login_illustration_big.png" alt="Cambly" />
      </div>
      <div className="login__wrap">
        <h1>Chào mừng quay trở lại với Cambly</h1>
        <h6 className="login--mt-15 login--mb-15">Đăng nhập với:</h6>
        <LoginWithSocial />
        <div className="login__line login--mt-15 login--mb-15">
          <hr className="login--mr-10" />
          <p>hoặc</p>
          <hr className="login--ml-10" />
        </div>
        <h6 className="login--mt-15 login--mb-15">Đăng nhập với địa chỉ email của bạn:</h6>
        <LoginWithForm />
        <h6 className="login--mt-15 login--mb-15">
          <span className="login--color-primary">Quên mật khẩu của bạn?</span>
        </h6>
        <Button variant="contained" className="login--bg-color-primary">
          Đăng nhập
        </Button>
        <h6 className="login--mt-15 login--mb-15">
          Mới dùng Cambly?<span className="login--color-primary">Đăng ký</span>
        </h6>
      </div>
    </div>
  );
};
