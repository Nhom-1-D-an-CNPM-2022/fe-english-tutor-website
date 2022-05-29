import React, { useState } from 'react';
import './TutorLogin.scss';

import { LoginWithForm, LoginWithSocial } from '../../components';
import { Button, Divider } from '@mui/material';

import Swal from 'sweetalert2';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router-dom';
import tutorApi from '../../services/aixos/tutorApi';

export const TutorLogin = () => {
  const history = useHistory();
  const className = 'tutor-login';
  const [values, setValues] = useState({
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
    }

    tutorApi
      .loginTutor({ email: values.email, password: values.password })
      .then(function (response: any) {
        if (response.data.accessToken !== '') {
          localStorage.setItem('accessToken', response.data.accessToken);

          if (history.action === 'PUSH') {
            history.goBack();
          } else {
            history.push({
              pathname: `/tutors/profile/me`,
            });
          }
        }
      })
      .catch(function (error: any) {
        Swal.fire({
          icon: 'error',
          title: 'Email hoặc mật khẩu không đúng.',
        });
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
    <div className={className}>
      <div className={`${className}__wrap`}>
        <h1>Chào mừng quay trở lại với Cambly</h1>
        <h6 className={`${className}--mt-24 ${className}--mb-24`}>Đăng nhập với:</h6>
        <LoginWithSocial />
        <Divider sx={{ marginBottom: '24px', marginTop: '24px' }} textAlign="center">
          hoặc
        </Divider>
        <h6 className={`${className}--mt-24 ${className}--mb-24`}>
          Đăng nhập với địa chỉ email của bạn:
        </h6>
        <LoginWithForm
          values={values}
          handleChange={handleChange}
          handleClickShowPassword={handleClickShowPassword}
        />
        <h6 className={`${className}--mt-24 ${className}--mb-24`}>
          <span className={`${className}--color-primary`}>Quên mật khẩu của bạn?</span>
        </h6>
        <Button
          variant="contained"
          className={`${className}--bg-color-primary`}
          onClick={handleSubmit}
        >
          Đăng nhập
        </Button>
        <h6 className={`${className}--mt-24 ${className}--mb-24`}>
          Mới dùng Cambly?{' '}
          <Link
            href="/tutor/register"
            className={`${className}--color-primary`}
            sx={{ textDecoration: 'none' }}
          >
            Đăng ký
          </Link>
        </h6>
      </div>
    </div>
  );
};
