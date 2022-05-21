import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import TutorSignUpLayout from '../../../layouts/TutorSignUpLayout/TutorSignUpLayout';
import { REWARD_LIST } from './constants';
import style from './style';

export function TutorSignUpHome() {
  return (
    <TutorSignUpLayout>
      <Box width="100%" color="#333333">
        <Box sx={style.gettingStartedOuterWrapper}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
            sx={style.gettingStartedInnerWrapper}
          >
            <Box>
              <Card sx={style.card}>
                <CardContent sx={style.cardContent}>
                  <Typography sx={style.cardContentTitle}>TUTOR WITH CAMBLY</Typography>
                  <Typography sx={style.cardContentDescription}>
                    Get paid to chat with people from around the world.
                  </Typography>
                </CardContent>
                <CardActions sx={style.cardActions}>
                  <Button href="/tutor/signup" variant="contained" sx={style.getStartedButton}>
                    Get Started
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Stack>
        </Box>
        <Box sx={style.introductionContainer}>
          <Box sx={style.introductionTitleWrapper}>
            <Typography sx={style.introductionTitle}>
              Tutoring English with Cambly is fun & rewarding
            </Typography>
            <Typography sx={style.introductionSubtitle}>
              No teaching certificate, bachelor’s degree or prior teaching experience needed.
            </Typography>
          </Box>
          {REWARD_LIST.map((reward) => (
            <List key={reward.text.primary} sx={style.introductionList}>
              <ListItem sx={style.introductionListItem} disablePadding>
                <ListItemIcon sx={style.introductionListItemIcon}>
                  <img src={reward.iconImageSrc} />
                </ListItemIcon>
                <ListItemText
                  sx={style.introductionListItemText}
                  primary={reward.text.primary}
                  secondary={reward.text.secondary}
                />
              </ListItem>
            </List>
          ))}
        </Box>
        <Box width="307px" margin="25px auto">
          <Button href="/tutor/signup" variant="contained" sx={style.getStartedButton}>
            Get Started
          </Button>
        </Box>
      </Box>
    </TutorSignUpLayout>
  );
}
