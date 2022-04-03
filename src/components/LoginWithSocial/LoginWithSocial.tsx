import React from 'react';
import './LoginWithSocial.scss';
import Button from '@mui/material/Button';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import SvgIcon from '@mui/material/SvgIcon';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
export const LoginWithSocial = () => {
  const history = useHistory();
  const handleSuccessLoginWithGoogle = async (response: any) => {
    const tokenId = response.tokenId;
    console.log(tokenId);
    axios
      .post(`${process.env.URL_MY_API}users/login/google`, {
        tokenId: tokenId,
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
  const handleFaliedLoginWithGoogle = (response: any) => {
    console.log(response);
  };
  const responseFacebook = (response: any) => {
    axios
      .post(`${process.env.URL_MY_API}users/login/facebook`, {
        tokenId: response.accessToken,
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
  return (
    <div className="login-with-social">
      <FacebookLogin
        appId="346628950749198"
        autoLoad={false}
        callback={responseFacebook}
        render={(renderProps: any) => (
          <button onClick={renderProps.onClick}>
            <div className="login-with-social__button">
              <svg
                className="MuiSvgIcon-root-69"
                focusable="false"
                viewBox="0 0 34 33"
                aria-hidden="true"
                style={{ marginRight: '12px', height: '24px', width: '24px' }}
              >
                <path
                  fill="#4267B2"
                  fill-rule="nonzero"
                  d="M17 0C7.887 0 .5 7.425.5 16.585c0 8.315 6.093 15.181 14.033 16.38V20.981h-4.082v-4.36h4.082v-2.902c0-4.803 2.328-6.91 6.3-6.91 1.902 0 2.907.14 3.384.205v3.805h-2.71c-1.686 0-2.275 1.607-2.275 3.418v2.383h4.942l-.67 4.36h-4.27V33C27.288 31.904 33.5 24.981 33.5 16.585 33.5 7.425 26.113 0 17 0z"
                ></path>
              </svg>
              <span>Facebook</span>
            </div>
          </button>
        )}
      />

      <GoogleLogin
        clientId="503078025554-e9df776se6oom7m0vqsoj1gjlkn1maku.apps.googleusercontent.com"
        onSuccess={handleSuccessLoginWithGoogle}
        onFailure={handleFaliedLoginWithGoogle}
        cookiePolicy={'single_host_origin'}
        buttonText=""
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <div className="login-with-social__button">
              <svg
                className="MuiSvgIcon-root-69"
                focusable="false"
                viewBox="0 0 48 48"
                aria-hidden="true"
                style={{ marginRight: '12px', height: '24px', width: '24px' }}
              >
                <g id="surface1">
                  <path
                    fill="#FFC107"
                    d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 33.652344 32.65625 29.222656 36 24 36 C 17.371094 36 12 30.628906 12 24 C 12 17.371094 17.371094 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 12.953125 4 4 12.953125 4 24 C 4 35.046875 12.953125 44 24 44 C 35.046875 44 44 35.046875 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z "
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M 6.304688 14.691406 L 12.878906 19.511719 C 14.65625 15.109375 18.960938 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 16.316406 4 9.65625 8.335938 6.304688 14.691406 Z "
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M 24 44 C 29.164063 44 33.859375 42.023438 37.410156 38.808594 L 31.21875 33.570313 C 29.210938 35.089844 26.714844 36 24 36 C 18.796875 36 14.382813 32.683594 12.71875 28.054688 L 6.195313 33.078125 C 9.503906 39.554688 16.226563 44 24 44 Z "
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 34.511719 30.238281 33.070313 32.164063 31.214844 33.570313 C 31.21875 33.570313 31.21875 33.570313 31.21875 33.570313 L 37.410156 38.808594 C 36.972656 39.203125 44 34 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z "
                  ></path>
                </g>
              </svg>
              <span>Google</span>
            </div>
          </button>
        )}
      ></GoogleLogin>

      <div className="login-with-social__button">
        <svg
          className="MuiSvgIcon-root-69"
          focusable="false"
          viewBox="0 0 1000 1187.198"
          aria-hidden="true"
          style={{ marginRight: '12px', height: '24px', width: '24px' }}
        >
          <path
            d="m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z"
            id="path4"
          ></path>
        </svg>
        <span>Apple</span>
      </div>
    </div>
  );
};
