import React, { useState, useEffect } from 'react';
import './ScheduleBodyTutor.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { ScheduleClassTutor } from '../ScheduleClassTutor/ScheduleClassTutor';
import scheduleApi from '../../../services/aixos/scheduleApi';

import { Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
  checkDate,
}: IScheduleBody) => {
  const className = 'scheduleBodyTutor';
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

  const tutor = useSelector((state: RootState) => state.userSlice.tutor);
  const [listCalendar, setLisCalendar] = useState([]);
  const [listSchedule, setListSchedule] = useState([]);

  const getCalendar = async () => {
    if (tutor.length !== 0) {
      const listCalendar = await scheduleApi.getSchedule({ tutorId: tutor._id });
      setLisCalendar([...[], ...listCalendar.data]);
    }
  };

  const createSchedule = () => {
    let schedule = new Array(daysInMonth + startDay).fill({});

    if (listCalendar.length !== 0) {
      for (let i = 0; i < listCalendar.length; i++) {
        let day = new Date(listCalendar[i].startTime).getDate();
        let index = day + startDay - 1;

        schedule[index] = listCalendar[i];
      }
    }

    setListSchedule(schedule);
  };

  useEffect(() => {
    getCalendar();
  }, [tutor]);

  useEffect(() => {
    createSchedule();
  }, [listCalendar]);

  console.log(listSchedule);

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
          {listSchedule.length !== 0 &&
            listSchedule.map((item: any, index: number) => {
              return index >= startDay ? (
                <div
                  className={`${className}__day ${checkDate(index + 1 - startDay, month, year)}`}
                >
                  <div className={`${className}__text-content`}>
                    <div className={`${className}__text ${activeCurrentDay(index + 1 - startDay)}`}>
                      <small>{index + 1 - startDay}</small>
                    </div>
                  </div>
                  <div className={`${className}__tutor`}>
                    {item.interval && (
                      <Avatar sx={{ width: 20, height: 20, float: 'left' }}>
                        <CheckCircleIcon />
                      </Avatar>
                    )}
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
                </div>
              ) : (
                <div className={`${className}__day ${className}__hide`}></div>
              );
            })}
        </div>
      </div>
    </>
  );
};
