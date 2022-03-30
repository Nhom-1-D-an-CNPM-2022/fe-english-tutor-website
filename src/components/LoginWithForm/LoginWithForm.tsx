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
interface IValueLogin{
  email: string,
  password: string,
  showPassword: boolean
}
interface ILoginWithForm {
  values: IValueLogin,
  handleChange: any,
  handleClickShowPassword: any,
}
export const LoginWithForm:React.FC<ILoginWithForm> = ({values, handleChange, handleClickShowPassword}) => {
  

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
          onChange={handleChange('email')}
        />
        <div className="login-with-form--mt-15"></div>
      </FormControl>
      <FormControl sx={{ width: '350px' }}>
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
    </div>
  );
};
