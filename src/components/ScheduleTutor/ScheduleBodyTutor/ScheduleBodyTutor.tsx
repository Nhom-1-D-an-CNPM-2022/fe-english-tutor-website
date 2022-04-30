import React, { useState } from 'react';
import './ScheduleBodyTutor.scss';

import { ScheduleClassTutor } from '../ScheduleClassTutor/ScheduleClassTutor';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

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

  return (
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
                <div
                  className={`${className}__text ${activeCurrentDay(
                    index + 1 - startDay,
                  )} ${activeBookedDay(index + 1 - startDay)}`}
                >
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
              {checkBookedDate(index + 1 - startDay, month, year) && (
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
                          <Box className='Popup-text-able'>00:30 - 01:00</Box>
                        </ListItemText>
                        <Button className='Popup-button-able'>Chọn</Button>
                      </ListItem>
                      <ListItem disableGutters={true} button={true}>
                        <ListItemText>
                          <Box className='Popup-text-able'>00:30 - 01:00</Box>
                        </ListItemText>
                        <Button className='Popup-button-disable' disabled>Đã đặt trước</Button>
                      </ListItem>
                    </List>
                  </Popover>
                </div>
              )}
            </div>
          ) : (
            <div className={`${className}__day ${className}__hide`}></div>
          );
        })}
      </div>
    </div>
  );
};
