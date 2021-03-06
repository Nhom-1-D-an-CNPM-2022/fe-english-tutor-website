import React from 'react';
import { Box, Divider, Menu, MenuItem, Typography } from '@mui/material';
import { dividerStyle, menuItemStyle, menuStyle } from './style';

const menu = [
  {
    label: 'Account Settings',
  },
  {
    label: 'Your Profile',
  },
  {
    label: 'Sign Out',
    hasDividerBefore: true,
  },
];

interface Props {
  anchorEl: Element | ((element: Element) => Element) | null | undefined;
  open: boolean;
  handleClose: () => void;
}

export default function TutorSignUpHeaderUserMenu({ anchorEl, open, handleClose }: Props) {
  const handleOnClickMenuItem = () => {
    handleClose();
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
  };

  const buttonActions = [handleOnClickMenuItem, handleOnClickMenuItem, handleLogout];

  return (
    <Menu
      sx={menuStyle}
      id="menu-appbar"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      {menu.map((menuItem, index) => (
        <Box key={menuItem.label}>
          {menuItem.hasDividerBefore && <Divider sx={dividerStyle} />}
          <MenuItem onClick={buttonActions[index]} sx={menuItemStyle}>
            <Typography>{menuItem.label}</Typography>
          </MenuItem>
        </Box>
      ))}
    </Menu>
  );
}
