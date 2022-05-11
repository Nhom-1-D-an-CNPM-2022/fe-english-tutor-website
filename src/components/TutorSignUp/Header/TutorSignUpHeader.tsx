import { AppBar, Avatar, Box, Container, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { appBarStyle, logoWrapperStyle, toolbarStyle, userIconButtonStyle } from './style';
import TutorSignUpHeaderUserMenu from './UserMenu/TutorSignUpHeaderUserMenu';

export default function TutorSignUpHeader() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={appBarStyle}>
      <Container maxWidth={false}>
        <Toolbar sx={toolbarStyle} disableGutters>
          <Box sx={logoWrapperStyle}>
            <img src="/images/tutor-sign-up/primary.png" />
          </Box>
          <Box>
            <IconButton onClick={handleOpenUserMenu} sx={userIconButtonStyle} disableRipple>
              <Avatar src="/static/images/avatar/2.jpg" />
            </IconButton>
            <TutorSignUpHeaderUserMenu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              handleClose={handleCloseUserMenu}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
