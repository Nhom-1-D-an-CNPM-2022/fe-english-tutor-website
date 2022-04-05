import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import React from 'react';
import './LoginWithForm.scss';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
interface IValueLogin {
  email: string;
  isEmail: boolean;
  password: string;
  isPassword: boolean;
  showPassword: boolean;
}
interface ILoginWithForm {
  values: IValueLogin;
  handleChange: any;
  handleClickShowPassword: any;
}
export const LoginWithForm: React.FC<ILoginWithForm> = ({
  values,
  handleChange,
  handleClickShowPassword,
}) => {
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="login-with-form">
      <FormControl sx={{ width: '350px' }}>
        <TextField
          id="outlined-name"
          label="Email"
          value={values.email}
          defaultValue={values.email}
          onChange={handleChange('email')}
          error={values.isEmail === false && values.email === ''}
          helperText={(values.isEmail === false && values.email === '') ? 'Vui lòng nhập email đã đăng ký' : ' '}
        />
        <div className="login-with-form--mt-15"></div>
      </FormControl>
      <FormControl sx={{ width: '350px' }}>
        <InputLabel htmlFor="outlined-adornment-password" error={!values.isPassword && values.password === ''}>Mật khẩu</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          error={values.isPassword === false && values.password === ''}
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
        {!values.isPassword && values.password === '' && (
          <FormHelperText error id="outlined-adornment-password">
            Vui lòng nhập mật khẩu
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
};
