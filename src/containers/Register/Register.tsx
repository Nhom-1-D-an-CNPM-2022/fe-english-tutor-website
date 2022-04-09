import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginWithForm, LoginWithSocial } from '../../components';
import './Register.scss';

export const Register = () => {
  const history = useHistory();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    axios
      .post(`${process.env.URL_MY_API}users/register`, {
        email: values.email,
        password: values.password,
      })
      .then(function (response: any) {
        if (response.accessToken !== '') {
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
      .catch(function (error: any) {
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
    <div className="register">
      <div className="register__img">
        <img src="https://www.cambly.com/fe/static/signup_illustration.png" alt="Cambly" />
      </div>
      <div className="register__wrap">
        <h1>Bắt đầu học Tiếng Anh với Cambly</h1>
        <h6 className="register--mt-15 register--mb-15">Đăng ký với:</h6>
        <LoginWithSocial />
        <div className="register__line register--mt-15 register--mb-15">
          <hr className="register--mr-10" />
          <p>hoặc</p>
          <hr className="register--ml-10" />
        </div>
        <h6 className="register--mt-15 register--mb-15">Đăng ký bằng địa chỉ email của bạn:</h6>
        <LoginWithForm
          values={values}
          handleChange={handleChange}
          handleClickShowPassword={handleClickShowPassword}
        />
        <Button
          variant="contained"
          className="register--bg-color-primary"
          sx={{ marginTop: '15px' }}
          onClick={handleSubmit}
        >
          Tạo tài khoản
        </Button>
        <h6 className="register--mt-15 register--mb-15">
          Bạn đã có tài khoản? <span className="register--color-primary">Đăng nhập</span>
        </h6>
      </div>
    </div>
  );
};
