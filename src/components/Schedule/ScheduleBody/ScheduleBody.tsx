import React, { useState } from 'react';
import './ScheduleBody.scss';

import { ScheduleClass } from '../ScheduleClass/ScheduleClass';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

interface IScheduleBody {
  daysInMonth: number;
  startDay: number;
  month: number;
  year: number;
  activeCurrentDay: any;
  checkDate: any;
}

export const ScheduleBody = ({
  daysInMonth,
  startDay,
  month,
  year,
  activeCurrentDay,
  checkDate,
}: IScheduleBody) => {
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
                  <ScheduleClass
                    day={index + 1 - startDay}
                    month={month}
                    year={year}
                    weeksday={coverWeeksday(index % 7)}
                  />
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
