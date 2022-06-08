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
  const [responseError, setResponseError] = React.useState<string>('');

  const handleSubmit = () => {
    setEmailError('');
    setPasswordError('');
    handleAuthenticate(
      authType,
      account.email,
      account.password,
      setEmailError,
      setPasswordError,
      setResponseError,
    );
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

  function SubmitButton() {
    return (
      <Button
        variant="contained"
        sx={{
          ...(authType === 'login' && {
            marginTop: 1,
          }),
        }}
        onClick={handleSubmit}
      >
        {authType === 'signup' ? 'Create account' : 'Login'}
      </Button>
    );
  }

  function ButtonHelperText() {
    return (
      <Typography
        height="19.91px"
        margin="3px 14px 0 14px"
        variant="h6"
        lineHeight={1.66}
        letterSpacing="0.03333em"
        color="error.main"
        visibility={responseError ? 'visible' : 'hidden'}
      >
        {responseError}
      </Typography>
    );
  }

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
            <Box>
              <SubmitButton />
              <ButtonHelperText />
            </Box>
          </>
        ) : (
          <Box>
            <SubmitButton />
            <ButtonHelperText />
          </Box>
        )}
      </Box>
    </Box>
  );
}
