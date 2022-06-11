import React, { createContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setProfile } from '../../redux/slice/appSlice/tutorSignUpSlice';
import tutorSignUpApi from '../../services/aixos/tutorSignUpApi';

interface Params {
  authType: 'signup' | 'login';
  email: string;
  password: string;
  emailErrorSetter: (message: string) => void;
  passwordErrorSetter: (message: string) => void;
  responseErrorSetter: (message: string) => void;
}

interface ContextValue {
  handleAuthenticate: (
    authType: Params['authType'],
    email: Params['email'],
    password: Params['password'],
    emailErrorSetter: Params['emailErrorSetter'],
    passwordErrorSetter: Params['passwordErrorSetter'],
    responseErrorSetter: Params['responseErrorSetter'],
  ) => Promise<void>;
}

export const TutorAccountContext = createContext<ContextValue>({} as any);

export default function TutorAccountProvider({ children }: React.PropsWithChildren<{}>) {
  const dispatch = useDispatch();
  const history = useHistory();

  const isEmail = (str: string) => {
    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    return regex.test(str);
  };

  const isPasswordValid = (password: string) => {
    const minLength = 6;
    const maxLength = 25;

    if (password.length < minLength) {
      return 'This field must be at least 6 characters';
    }

    if (password.length > maxLength) {
      return 'Field must be between 4 and 25 characters long.';
    }

    return '';
  };

  const validateAccount = (
    email: string,
    password: string,
    emailErrorSetter: (message: string) => void,
    passwordErrorSetter: (message: string) => void,
  ) => {
    let isValid = true;

    if (!isEmail(email)) {
      isValid = false;
      emailErrorSetter('Invalid email address');
    }

    const passwordError = isPasswordValid(password);

    if (passwordError !== '') {
      isValid = false;
      passwordErrorSetter(passwordError);
    }

    return isValid;
  };

  const handleSignUp = async (email: string, password: string) => {
    const response = await tutorSignUpApi.signUpAccount({
      email,
      password,
    });
    return response.data;
  };

  const handleLogin = async (email: string, password: string) => {
    const response = await tutorSignUpApi.loginAccount('tradition', {
      email,
      password,
    });

    return response.data;
  };

  const handleGetProfile = async (accessToken: any) => {
    const response = await tutorSignUpApi.getProfile(accessToken);
    return response.data;
  };

  const handleLoginSuccessfully = (data: any) => {
    localStorage.setItem('accessToken', data.accessToken);
    dispatch(setProfile(data.profile));

    if (history.action === 'PUSH') {
      history.goBack();
    } else {
      history.push({
        pathname: `/tutorsignup/platformSelector`,
      });
    }
  };

  const handleAuthenticate = async (
    authType: Params['authType'],
    email: Params['email'],
    password: Params['password'],
    emailErrorSetter: Params['emailErrorSetter'],
    passwordErrorSetter: Params['passwordErrorSetter'],
    responseErrorSetter: Params['responseErrorSetter'],
  ) => {
    const isValid = validateAccount(email, password, emailErrorSetter, passwordErrorSetter);

    if (!isValid) {
      return;
    }

    switch (authType) {
      case 'signup':
        try {
          await handleSignUp(email, password);
          const loginData = await handleLogin(email, password);
          const profile = await handleGetProfile(loginData.accessToken);
          const result = {
            profile,
            accessToken: loginData.accessToken,
          };

          handleLoginSuccessfully(result);
        } catch (error: any) {
          responseErrorSetter(error.response.data);
        }

        break;
      case 'login':
        try {
          const loginData = await handleLogin(email, password);
          const profile = await handleGetProfile(loginData.accessToken);
          const result = {
            profile,
            accessToken: loginData.accessToken,
          };

          handleLoginSuccessfully(result);
        } catch (error: any) {
          responseErrorSetter(error.response.data);
        }

        break;
      default:
        break;
    }
  };

  return (
    <TutorAccountContext.Provider
      value={{
        handleAuthenticate,
      }}
    >
      {children}
    </TutorAccountContext.Provider>
  );
}
