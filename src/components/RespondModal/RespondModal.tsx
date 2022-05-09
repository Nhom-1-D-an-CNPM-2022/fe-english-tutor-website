import React, { useState } from 'react';
import './RespondModal.scss';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  TextareaAutosize,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckIcon from '@mui/icons-material/Check';
const BootstrapDialog = styled(Dialog)(({ theme }: any) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme: any) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
// const BootstrapButton = styled(Button)({
//   boxShadow: 'none',
//   textTransform: 'none',
//   fontSize: 16,
//   padding: '6px 12px',
//   border: '1px solid',
//   lineHeight: 1.5,
//   backgroundColor: '#0063cc',
//   borderColor: '#0063cc',
//   fontFamily: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     '"Segoe UI"',
//     'Roboto',
//     '"Helvetica Neue"',
//     'Arial',
//     'sans-serif',
//     '"Apple Color Emoji"',
//     '"Segoe UI Emoji"',
//     '"Segoe UI Symbol"',
//   ].join(','),
//   '&:hover': {
//     backgroundColor: '#0069d9',
//     borderColor: '#0062cc',
//     boxShadow: 'none',
//   },
//   '&:active': {
//     boxShadow: 'none',
//     backgroundColor: '#0062cc',
//     borderColor: '#005cbf',
//   },
//   '&:focus': {
//     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//   },
// });

// const ColorButton = styled(Button)<ButtonProps>(({ theme }:any) => ({
//   color: theme.palette.getContrastText(black[500]),
//   backgroundColor: black[500],
//   '&:hover': {
//     backgroundColor: black[700],
//   },
// }));

export const RespondModal = () => {
  const now = new Date();
  const [open, setOpen] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [isReject, setIsReject] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [contentCancel, setContentCancel] = useState('');
  const [timeAccepted, SetTimeAccepted] = useState(`${now.getHours()}:${now.getMinutes()}`);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        disableRipple
        onClick={handleClickOpen}
        sx={{ textTransform: 'capitalize', marginLeft: '7px' }}
      >
        Respond
      </Button>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Reservation
        </BootstrapDialogTitle>
        <DialogContent dividers sx={{ maxWidth: 500 }}>
          <List
            sx={{ width: 400, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            // subheader={
            //   <ListSubheader component="div" id="nested-list-subheader">
            //     Nested List Items
            //   </ListSubheader>
            // }
          >
            <ListItem>
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/255994635_259354502896004_1220698999122344491_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lCF7QyIo-GMAX8NvA1S&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-y5V8iOaD9wbM-rxX3APo8C891eQi1wfcjEIj7H6vazg&oe=626C17DA"
                  sx={{ width: 25, height: 25 }}
                />
              </ListItemIcon>
              <ListItemText primary="Đức" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary="2010201/2131" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ScheduleIcon />
              </ListItemIcon>
              <ListItemText primary="30 minutes" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LightbulbIcon />
              </ListItemIcon>
              <ListItemText primary="Conservation practice" />
            </ListItem>
          </List>
          <Typography
            variant="body2"
            color="text.secondary"
            display="flex"
            justifyContent="center"
            marginBottom={2}
          >
            <CheckIcon color="success" /> Đức booked Today at 5:56PM
          </Typography>
          {isAccept ? (
            <Typography
              variant="body2"
              color="text.secondary"
              display="flex"
              justifyContent="center"
              marginBottom={2}
            >
              <CheckIcon color="success" /> You comfirmed Đức at {timeAccepted}
            </Typography>
          ) : (
            <></>
          )}
          {isCancel ? (
            <Typography
              variant="body2"
              color="text.secondary"
              display="flex"
              justifyContent="center"
              marginBottom={2}
            >
              <CheckIcon color="success" /> You cancel reservation at {timeAccepted}
            </Typography>
          ) : (
            <></>
          )}
          {!isAccept && !isReject && !isCancel ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                marginLeft: '40px',
                marginRight: '40px',
              }}
            >
              <Button
                variant="contained"
                color="success"
                sx={{ textTransform: 'capitalize' }}
                onClick={() => setIsAccept(true)}
              >
                <CheckIcon /> I'll be there
              </Button>
              <Button
                variant="contained"
                sx={{ textTransform: 'capitalize', backgroundColor: '#000', color: '#fff' }}
                onClick={() => setIsReject(true)}
              >
                <CloseIcon /> I can't make it
              </Button>
            </Box>
          ) : (
            <></>
          )}
          {isAccept && !isReject && !isCancel ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                marginLeft: '40px',
                marginRight: '40px',
              }}
            >
              <Button
                variant="contained"
                sx={{ textTransform: 'capitalize', backgroundColor: '#000', color: '#fff' }}
                onClick={() => setIsReject(true)}
              >
                <CloseIcon /> I can't make it
              </Button>
            </Box>
          ) : (
            <></>
          )}
          {isReject ? (
            <>
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: 'bisque',
                  color: '#9c1d1d',
                  border: '1px solid #e8a60f',
                  marginTop: 3,
                  marginBottom: 3,
                }}
              >
                <CardContent>
                  <Typography variant="body2">
                    Students are often disappointed with cancellation, and an apologetic message can
                    go a long way.
                  </Typography>
                </CardContent>
              </Card>
              <TextareaAutosize
                value={contentCancel}
                onChange={(e) => {
                  setContentCancel(e.target.value);
                }}
                aria-label="minimum height"
                minRows={3}
                placeholder="Cancellation reason..."
                style={{
                  width: 470,
                  border: '1px solid #ccc',
                  padding: '5px',
                  fontSize: '12px',
                  borderRadius: '5px',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              >
                <Button
                  variant="contained"
                  color="warning"
                  disableRipple
                  sx={{ textTransform: 'capitalize' }}
                  onClick={() => {setIsReject(false); setIsCancel(true)}}
                >
                  Cancel reservation
                </Button>
              </Box>
            </>
          ) : (
            <></>
          )}
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            I can't make it
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
};
