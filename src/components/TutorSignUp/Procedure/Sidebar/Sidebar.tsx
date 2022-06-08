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
import PersonIcon from '@mui/icons-material/Person';
import {
  checkListStyle,
  drawerStyle,
  progressWrapperStyle,
  titleListStyle,
  welcomeListStyle,
} from './style';
import Button from '../base/Button/Button';
import React, { useContext } from 'react';
import { TutorSignUpProcedureContext } from '../../../../contexts/TutorSignUp/TutorSignUpProcedure/TutorSignUpProcedureContext';

export default function Sidebar() {
  const {
    steps,
    currentStep,
    numberOfSteps,
    isProfileStepCompleted,
    isSupplementalStepCompleted,
    isDemoLessonStepCompleted,
    isProcedureCompleted,
    goToStep,
    handleSubmitProfile,
  } = useContext(TutorSignUpProcedureContext);

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
        {steps.map((item, index) => (
          <ListItemButton
            key={item.name}
            selected={currentStep === item.step}
            onClick={() => goToStep(item.step)}
          >
            <ListItemText primary={item.name} />
            <ListItemIcon>
              {[isProfileStepCompleted, isSupplementalStepCompleted, isDemoLessonStepCompleted][
                index
              ] ? (
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
      {isProcedureCompleted ? (
        <>
          <Divider />
          <List sx={checkListStyle}>
            <ListItemButton selected={currentStep === 'status'} onClick={() => goToStep('status')}>
              <ListItemText primary={'Application status'} />
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
            </ListItemButton>
          </List>
        </>
      ) : (
        <Box sx={progressWrapperStyle}>
          <Typography>
            {
              [
                isProfileStepCompleted,
                isSupplementalStepCompleted,
                isDemoLessonStepCompleted,
              ].filter((value) => value === true).length
            }
            /{numberOfSteps} completed
          </Typography>
          <Button
            type="contained"
            endIcon={<ArrowForwardIcon />}
            disabled={
              [
                isProfileStepCompleted,
                isSupplementalStepCompleted,
                isDemoLessonStepCompleted,
              ].filter((value) => value === true).length !== numberOfSteps
            }
            onClick={handleSubmitProfile}
          >
            Submit
          </Button>
        </Box>
      )}
    </Drawer>
  );
}
