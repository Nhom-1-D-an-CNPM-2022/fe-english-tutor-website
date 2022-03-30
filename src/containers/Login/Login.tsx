import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginWithForm, LoginWithSocial } from '../../components';
import './Login.scss';

export const Login = () => {
  const history = useHistory();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    axios.post(`${process.env.URL_MY_API}users/login`, {
      email: values.email,
      password: values.password,
    })
    .then(function (response: any) {
      if(response.accessToken !== ""){
        localStorage.setItem('accessToken', response.accessToken);
        if (history.action === 'PUSH') {
          history.goBack();
        } else {
          history.push({
            pathname: `/`,
          });
        }
      }
    })
    .catch(function (error:any) {
      console.log(error);
    });
  };

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
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
        <LoginWithForm
          values={values}
          handleChange={handleChange}
          handleClickShowPassword={handleClickShowPassword}
        />
        <h6 className="login--mt-15 login--mb-15">
          <span className="login--color-primary">Quên mật khẩu của bạn?</span>
        </h6>
        <Button variant="contained" className="login--bg-color-primary" onClick={handleSubmit}>
          Đăng nhập
        </Button>
        <h6 className="login--mt-15 login--mb-15">
          Mới dùng Cambly?<span className="login--color-primary">Đăng ký</span>
        </h6>
      </div>
    </div>
  );
};
