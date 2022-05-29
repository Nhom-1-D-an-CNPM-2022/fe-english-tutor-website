import { AppBar, Avatar, Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAppBarStyle, getLogoWrapperStyle, toolbarStyle, userIconButtonStyle } from './style';
import TutorSignUpHeaderUserMenu from './UserMenu/TutorSignUpHeaderUserMenu';

export default function TutorSignUpHeader() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (!isAuthenticated && location.pathname.startsWith('/tutorsignup')) {
      setIsAuthenticated(true);
    }
  }, [location]);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position={isAuthenticated ? 'sticky' : 'static'} sx={getAppBarStyle(isAuthenticated)}>
      <Container maxWidth={false}>
        <Toolbar sx={toolbarStyle} disableGutters>
          <Box component="a" href="/" sx={getLogoWrapperStyle(isAuthenticated)}>
            <img src="/images/tutor-sign-up/primary.png" />
          </Box>
          {isAuthenticated ? (
            <Box>
              <IconButton onClick={handleOpenUserMenu} sx={userIconButtonStyle} disableRipple>
                <Avatar src="/images/avatar2.png" />
              </IconButton>
              <TutorSignUpHeaderUserMenu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                handleClose={handleCloseUserMenu}
              />
            </Box>
          ) : (
            <Box>
              <Button href="/tutor/login">Log In</Button>
              <Button href="/tutor/signup" variant="contained">
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
