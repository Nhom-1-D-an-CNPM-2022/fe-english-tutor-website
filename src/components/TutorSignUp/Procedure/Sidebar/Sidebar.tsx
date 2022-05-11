import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import {
  checkListStyle,
  drawerStyle,
  progressWrapperStyle,
  titleListStyle,
  welcomeListStyle,
} from './style';
import Button from '../base/Button/Button';
import { checkList } from './constants';
import React, { useContext } from 'react';
import { TutorSignUpProcedureContext } from '../../../../contexts/TutorSignUpProcedure/TutorSignUpProcedureContext';

export default function Sidebar() {
  const { currentStep, numberOfSteps, completedSteps, goToStep } = useContext(
    TutorSignUpProcedureContext,
  );

  return (
    <Drawer sx={drawerStyle} variant="permanent" anchor="left">
      <List sx={titleListStyle}>
        <ListItem>
          <ListItemText>
            <Typography variant="h6">Become a Cambly tutor</Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List sx={welcomeListStyle}>
        <ListItemButton selected={currentStep === 'welcome'} onClick={() => goToStep('welcome')}>
          <ListItemText primary="Welcome!" />
          <ListItemIcon>
            <MailOutlineOutlinedIcon />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <Divider />
      <List sx={checkListStyle}>
        <Typography>Your signup checklist</Typography>
        {checkList.map((item) => (
          <ListItemButton
            key={item.name}
            selected={currentStep === item.step}
            onClick={() => goToStep(item.step)}
          >
            <ListItemText primary={item.name} />
            <ListItemIcon>
              {completedSteps.has(item.step) ? (
                <CheckCircleOutlinedIcon
                  sx={{
                    color: '#228891',
                  }}
                />
              ) : (
                <PanoramaFishEyeIcon />
              )}
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>
      <Box sx={progressWrapperStyle}>
        <Typography>
          {completedSteps.size}/{numberOfSteps} completed
        </Typography>
        <Button type="contained" endIcon={<ArrowForwardIcon />} disabled>
          Submit
        </Button>
      </Box>
    </Drawer>
  );
}
