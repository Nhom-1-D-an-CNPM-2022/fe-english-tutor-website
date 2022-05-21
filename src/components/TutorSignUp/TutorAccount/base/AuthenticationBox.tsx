import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react';
import { TutorAccountContext } from '../../../../contexts/TutorSignUp/TutorAccountContext';

export default function AuthenticationBox({ authType }: { authType: 'login' | 'signup' }) {
  const { handleAuthenticate } = React.useContext(TutorAccountContext);
  const [account, setAccount] = React.useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [emailError, setEmailError] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<string>('');

  const handleSubmit = () => {
    setEmailError('');
    setPasswordError('');
    handleAuthenticate({
      authType,
      email: account.email,
      password: account.password,
      emailErrorSetter: setEmailError,
      passwordErrorSetter: setPasswordError,
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    prop: keyof typeof account,
  ) => {
    setAccount({ ...account, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Box maxWidth="350px">
        <TextField
          value={account.email}
          onChange={(e) => handleChange(e, 'email')}
          variant="outlined"
          label="Email"
          error={emailError !== ''}
          helperText={emailError !== '' ? emailError : ' '}
          sx={{
            marginBottom: 2,
          }}
          fullWidth
        />
        <TextField
          value={account.password}
          onChange={(e) => handleChange(e, 'password')}
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          inputProps={{
            maxLength: 25,
          }}
          label="Password"
          error={passwordError !== ''}
          helperText={passwordError !== '' ? passwordError : ' '}
          fullWidth
        />
      </Box>
      <Box marginTop={1}>
        {authType === 'login' ? (
          <>
            <Typography variant="h6">
              <Link href="/">Forgot your password?</Link>
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: 1,
              }}
              onClick={handleSubmit}
            >
              Log in
            </Button>
          </>
        ) : (
          <Button variant="contained" onClick={handleSubmit}>
            Create account
          </Button>
        )}
      </Box>
    </Box>
  );
}
