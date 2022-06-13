import React, { useState } from 'react';
import './ScheduleTutor.scss';

import { ScheduleHeader } from '../Schedule/ScheduleHeader/ScheduleHeader';
import { ScheduleBodyTutor } from './ScheduleBodyTutor/ScheduleBodyTutor';

export const ScheduleTutor = () => {
  const day = new Date();
  const [currentMonth, setCurrentMonth] = useState(day.getMonth());
  const [currentYear, setCurrentYear] = useState(day.getFullYear());

  // Lấy số ngày của 1 tháng
  const getDaysInMonth = () => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  };

  // Lấy ngày bắt đầu của tháng
  const getStartDayInMonth = () => {
    const startDay = new Date(currentYear, currentMonth, 1).getDay();

    if (startDay === 0) return 7;

    return startDay;
  };

  // Kiểm tra có phải ngày hiện tại
  const activeCurrentDay = (day: any) => {
    let currentDay = new Date().toDateString();
    let dayString = new Date(currentYear, currentMonth, day).toDateString();
    return currentDay == dayString ? 'scheduleBody__active' : '';
  };
  //Kiem tra co phai ngay da duoc book hay ko
  const activeBookedDay = (day: any) => {
    let currentDay = new Date().toDateString();
    let dayString = new Date(currentYear, currentMonth, day - 2).toDateString();
    return currentDay == dayString ? 'scheduleBody__booked' : '';
  };
  // Kiểm tra xem có phải là quá khứ hay không?
  const checkDate = (day: number, month: number, year: number) => {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    if (year > currentYear) {
      return '';
    }

    if (year === currentYear && month > currentMonth) {
      return '';
    }

    if (year === currentYear && month === currentMonth && day >= currentDay) {
      return '';
    }

    return 'scheduleBody__past';
  };

  const checkBookedDate = (day: number, month: number, year: number) => {
    const date = new Date();
    console.log('date', date.getFullYear());
    return day == date.getDate() && month == date.getMonth() && year == date.getFullYear();
  };

  // Xử lý khi thay đổi tháng
  const handleChangeMonth = (type: string) => {
    let month = currentMonth;
    let year = currentYear;

    if (type === 'up') {
      month += 1;
    } else if (type === 'down') {
      month -= 1;
    }

    if (month < 0) {
      setCurrentMonth(11);
      setCurrentYear(--year);
    } else if (month > 11) {
      setCurrentMonth(0);
      setCurrentYear(++year);
    } else {
      setCurrentMonth(month);
    }
  };

  const daysInMonth = getDaysInMonth();
  const startDay = getStartDayInMonth();

  const className = 'scheduleTutor';

  return (
    <div className={className}>
      <div className={`${className}__content`}>
        <div className={`${className}__row`}>
          <div className={`${className}__col`}>
            <div className={`${className}__calender`}>
              <ScheduleHeader
                month={currentMonth}
                year={currentYear}
                handleChange={handleChangeMonth}
              />
              <ScheduleBodyTutor
                daysInMonth={daysInMonth}
                startDay={startDay - 1}
                month={currentMonth}
                year={currentYear}
                activeCurrentDay={activeCurrentDay}
                activeBookedDay={activeBookedDay}
                checkDate={checkDate}
                checkBookedDate={checkBookedDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
