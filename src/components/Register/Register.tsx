import React from 'react';
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Button,
  Divider,
  ButtonBase,
} from '@mui/material';
import './Register.scss';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Register = () => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="register-page">
      <div className="register-page__img">
        <img src="https://www.cambly.com/fe/static/signup_illustration.png" />
      </div>
      <div className="register-page__main-content">
        <Typography variant="h5" gutterBottom component="div">
          Bắt đầu học Tiếng Anh với Cambly
        </Typography>
        <p>Đăng ký với:</p>
        <div className="register-page__register-button-group">
          <Button variant="outlined">
            <FacebookIcon sx={{ marginRight: '10px' }} />
            Facebook
          </Button>
          <Button variant="outlined">
            <GoogleIcon sx={{ marginRight: '10px' }} />
            Google
          </Button>
        </div>
        <Divider sx={{ width: '350px', height: '8px', marginBottom: '40px' }}>hoặc</Divider>
        <p>Đăng ký bằng địa chỉ email của bạn:</p>
        <FormControl sx={{ width: '350px', marginTop: '15px' }}>
          <TextField
            id="outlined-name"
            label="Email"
            value={values.email}
            onChange={handleChange('email')}
          />
        </FormControl>
        <FormControl sx={{ width: '350px', marginTop: '15px' }}>
          <InputLabel htmlFor="outlined-adornment-password">Mật khẩu</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <div>
          <Button variant="contained" fullWidth sx={{ width: '350px', marginY: '15px' }}>
            Tạo tài khoản
          </Button>
          <p>
            Bạn đã có tài khoản? <a href="#">Đăng nhập</a>
          </p>
        </div>
      </div>
    </div>
  );
};
