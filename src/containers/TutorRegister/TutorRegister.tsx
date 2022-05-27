import React from 'react';
import './TutorRegister.scss';

import { LoginWithForm, LoginWithSocial } from '../../components';
import { Button, Divider } from '@mui/material';

import axios from 'axios';
import Link from '@mui/material/Link';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

export const TutorRegister = () => {
  const history = useHistory();
  const className = 'tutor-register';
  const [values, setValues] = React.useState({
    email: '',
    isEmail: true,
    password: '',
    isPassword: true,
    showPassword: false,
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (values.email === '') {
      values.isEmail = false;
      setValues({ ...values });
      if (values.password === '') {
        values.isPassword = false;
        setValues({ ...values });
        return;
      }
      return;
    }
    if (values.password === '') {
      values.isPassword = false;
      setValues(values);
      return;
    } else {
      axios
        .post(`${process.env.URL_MY_API}users/login`, {
          email: values.email,
          password: values.password,
        })
        .then(function (response: any) {
          console.log(response.data.accessToken);
          if (response.data.accessToken !== '') {
            localStorage.setItem('accessToken', response.data.accessToken);

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
          Swal.fire({
            icon: 'error',
            title: 'Email hoặc mật khẩu không đúng.',
          });
        });
    }
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
    <div className={className}>
      <div className={`${className}__img`}>
        <img src="https://www.cambly.com/fe/static/tutor/tutor-signup-img.jpg" alt="Cambly" />
      </div>
      <div className={`${className}__wrap`}>
        <h5>Bắt đầu Dạy Kèm trên Cambly</h5>
        <h6 className={`${className}--mt-24 ${className}--mb-24`}>Đăng ký với:</h6>
        <LoginWithSocial />
        <Divider sx={{ marginBottom: '24px', marginTop: '24px' }} textAlign="center">
          hoặc
        </Divider>
        <h6 className={`${className}--mt-24 ${className}--mb-24`}>
          Đăng ký với địa chỉ email của bạn:
        </h6>
        <LoginWithForm
          values={values}
          handleChange={handleChange}
          handleClickShowPassword={handleClickShowPassword}
        />
        <Button
          variant="contained"
          className={`${className}--bg-color-primary ${className}--mt-15`}
          onClick={handleSubmit}
        >
          Tạo Tài Khoản
        </Button>
        <h6 className={`${className}--mt-15 ${className}--mb-15`}>
          Bạn đã có tài khoản?{' '}
          <Link
            href="/tutor/login"
            className={`${className}--color-primary`}
            sx={{ textDecoration: 'none' }}
          >
            Đăng nhập
          </Link>
        </h6>
        <h6 className={`${className}--mb-15`}>
          Bằng cách tạo một tài khoản, bạn đồng ý với{' '}
          <Link
            href="#"
            className={`${className}--color-primary`}
            sx={{ textDecoration: 'none' }}
          >
            Thỏa thuận người dùng
          </Link>{' '}
          và{' '}
          <Link
            href="#"
            className={`${className}--color-primary`}
            sx={{ textDecoration: 'none' }}
          >
            Chính sách Quyền riêng tư
          </Link>{' '}
          của chúng tôi
        </h6>
      </div>
    </div>
  );
};
