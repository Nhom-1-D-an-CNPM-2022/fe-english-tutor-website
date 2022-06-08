import { buttonClasses } from '@mui/material';

export const getAppBarStyle = (isAuthenticated: boolean) => {
  const common = {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
  };

  if (isAuthenticated) {
    return {
      ...common,
      position: 'sticky',
      borderBottom: '5px solid rgba(0, 0, 0, 0.1)',
    };
  } else {
    return {
      ...common,
      position: 'static',
    };
  }
};

export const toolbarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  [`& .${buttonClasses.root}`]: {
    margin: '0 10px',
    textTransform: 'none',
  },
};

export const getLogoWrapperStyle = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return {
      width: '140px',
      height: '40px',
      margin: '14px 12px',
    };
  } else {
    return {
      width: '201px',
      height: '70px',
      padding: '12px 20px',
    };
  }
};

export const userIconButtonStyle = {
  padding: '12px',
};
