import React, { useState, useEffect } from 'react';
import './ScheduleBodyTutor.scss';
import axios from 'axios';
import { ScheduleClassTutor } from '../ScheduleClassTutor/ScheduleClassTutor';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { AnyObject } from 'immer/dist/internal';
import { ContextExclusionPlugin } from 'webpack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
interface IScheduleBody {
  daysInMonth: number;
  startDay: number;
  month: number;
  year: number;
  activeCurrentDay: any;
  activeBookedDay: any;
  checkDate: any;
  checkBookedDate: any;
}

export const ScheduleBodyTutor = ({
  daysInMonth,
  startDay,
  month,
  year,
  activeCurrentDay,
  activeBookedDay,
  checkDate,
  checkBookedDate,
}: IScheduleBody) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const className = 'scheduleBody';
  const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const coverWeeksday = (weeksday: number) => {
    switch (weeksday) {
      case 0:
        return 'thứ hai';
      case 1:
        return 'thứ ba';
      case 2:
        return 'thứ tư';
      case 3:
        return 'thứ năm';
      case 4:
        return 'thứ sáu';
      case 5:
        return 'thứ bảy';
      default:
        return 'chủ nhật';
    }
  };

  //get repone from api
  const [response, setRespone] = useState([]);

  useEffect(() => {
    const headers = {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYyNzY4NTBiMDM2MTZlZjdhZjc2ZjA2YSIsImVtYWlsIjoiMTIzQGdtYWlsLmNvbSIsImlzVmVyaWZpZWQiOmZhbHNlfSwiaWF0IjoxNjUyNzkxODQ4LCJleHAiOjE2NTI3OTU0NDh9.LpjD_yxDVhG6gzD79Ewb4ionefGb3ePMVsTA7CCIH3E',
    };
    axios
      .get(`${process.env.URL_MY_API}schedule`, { headers })
      .then((response) => setRespone(response.data));
  }, []);
  console.log(response);

  const response_daytime = response.map((res) => ({
    year: parseInt(res.createdAt.substring(0, 4)),
    month: parseInt(res.createdAt.substring(5, 7)),
    day: parseInt(res.createdAt.substring(8, 10)),
    hour: parseInt(res.createdAt.substring(11, 13)),
    minute: parseInt(res.createdAt.substring(14, 16)),
    second: parseInt(res.createdAt.substring(17, 19)),
    interval: res.interval,
    idStudent: res._id,
  }));

  console.log(response_daytime);

  const getBooked = (
    day: number,
    month: number,
    year: number,
    day1: number,
    month1: number,
    year1: number,
  ) => {
    return day == day1 && month == month1 && year == year1;
  };
  function createData(idStudent: string, dateStart: string, timeStart: string, interval: number) {
    return { idStudent, dateStart, timeStart, interval };
  }

  return (
    <>
      <div className={className}>
        <div className={`${className}__content`}>
          {weekdays.map((item: string, index: number) => {
            return (
              <div className={`${className}__title`}>
                <h5>{item}</h5>
              </div>
            );
          })}
          {[...Array(daysInMonth + startDay)].map((item: any, index: number) => {
            return index >= startDay ? (
              <div className={`${className}__day ${checkDate(index + 1 - startDay, month, year)}`}>
                <div className={`${className}__text-content`}>
                  <div className={`${className}__text ${activeCurrentDay(index + 1 - startDay)}`}>
                    <small>{index + 1 - startDay}</small>
                  </div>
                </div>
                <div className={`${className}__tutor`}>
                  <Avatar sx={{ width: 20, height: 20, float: 'left' }}>
                    <PersonOutlineIcon />
                  </Avatar>
                </div>
                {!checkDate(index + 1 - startDay, month, year) && (
                  <div className={`${className}__btn`}>
                    <ScheduleClassTutor
                      day={index + 1 - startDay}
                      month={month}
                      year={year}
                      weeksday={coverWeeksday(index % 7)}
                    />
                  </div>
                )}
                {/* {response_daytime.map((item: any, index: number) => {
                return (
                  getBooked(index + 1 - startDay, month, year, item.day, item.month - 1, item.year) && (
                    <div className={`${className}__btn`}>
                      <hr className="green-line" onClick={handleClick} />
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <List disablePadding={true}>
                          <ListItem disableGutters={true} button={true}>
                            <ListItemText>
                              <Box className="Popup-text-able">{item.day} {item.month} {item.year}</Box>
                            </ListItemText>
                            <Button className="Popup-button-able">Chọn</Button>
                          </ListItem>
                          <ListItem disableGutters={true} button={true}>
                            <ListItemText>
                              <Box className="Popup-text-able">00:30 - 01:00</Box>
                            </ListItemText>
                            <Button className="Popup-button-disable" disabled>
                              Đã đặt trước
                            </Button>
                          </ListItem>
                        </List>
                      </Popover>
                    </div>
                  )
                );
              })} */}
                {/* {getBooked(index + 1 - startDay, month, year, fake_data[0].day, fake_data[0].month - 1, fake_data[0].year) && (
                <div className={`${className}__btn`}>
                  <hr className="green-line" onClick={handleClick} />
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <List disablePadding={true}>
                      <ListItem disableGutters={true} button={true}>
                        <ListItemText>
                          <Box className="Popup-text-able">
                            {response_daytime.map((item: any, index: number) => {
                              return (
                                <div className={`${className}__title`}>
                                  <h5>{item.day}</h5>
                                </div>
                              );
                            })}
                          </Box>
                        </ListItemText>
                        <Button className="Popup-button-able">Chọn</Button>
                      </ListItem>
                      <ListItem disableGutters={true} button={true}>
                        <ListItemText>
                          <Box className="Popup-text-able">00:30 - 01:00</Box>
                        </ListItemText>
                        <Button className="Popup-button-disable" disabled>
                          Đã đặt trước
                        </Button>
                      </ListItem>
                    </List>
                  </Popover>
                </div>
              )}
              {getBooked(index + 1 - startDay, month, year, fake_data[1].day, fake_data[1].month - 1, fake_data[1].year) && (
                <div className={`${className}__btn`}>
                  <hr className="green-line" onClick={handleClick} />
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <List disablePadding={true}>
                      <ListItem disableGutters={true} button={true}>
                        <ListItemText>
                          <Box className="Popup-text-able">
                            {response_daytime.map((item: any, index: number) => {
                              return (
                                <div className={`${className}__title`}>
                                  <h5>{item.day}</h5>
                                </div>
                              );
                            })}
                          </Box>
                        </ListItemText>
                        <Button className="Popup-button-able">Chọn</Button>
                      </ListItem>
                      <ListItem disableGutters={true} button={true}>
                        <ListItemText>
                          <Box className="Popup-text-able">00:30 - 01:00</Box>
                        </ListItemText>
                        <Button className="Popup-button-disable" disabled>
                          Đã đặt trước
                        </Button>
                      </ListItem>
                    </List>
                  </Popover>
                </div>
              )} */}
              </div>
            ) : (
              <div className={`${className}__day ${className}__hide`}></div>
            );
          })}
        </div>
      </div>
      <Typography variant="h4" component="h5">
        Booking list
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Student id</TableCell>
              <TableCell align="right">Date start</TableCell>
              <TableCell align="right">Time start</TableCell>
              <TableCell align="right">Interval</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {response_daytime.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item.idStudent}
                </TableCell>
                <TableCell align="right">
                  {item.day}/{item.month}/{item.year}
                </TableCell>
                <TableCell align="right">
                  {item.hour}:{item.minute}:{item.second}
                </TableCell>
                <TableCell align="right">{item.interval}</TableCell>
                <TableCell align="right">
                  <Button variant="contained">Confirm</Button>
                  <Button variant="outlined" color="error">
                    Decline
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
