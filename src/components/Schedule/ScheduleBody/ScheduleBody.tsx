import React, { useState, useEffect } from 'react';
import './ScheduleBody.scss';

import { ScheduleClass } from '../ScheduleClass/ScheduleClass';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import bookingApi from '../../../services/aixos/booking';
import Swal from 'sweetalert2';

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
  const [listBook, setListBook] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [update, setUpdate] = useState(0);

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

  const getBooking = async () => {
    const data = await bookingApi.getBookedLesson();
    setListBook([...[], ...data.data]);
  };

  const createSchedule = () => {
    let booking = new Array(daysInMonth + startDay).fill({});

    if (listBook.length !== 0) {
      for (let i = 0; i < listBook.length; i++) {
        let day = new Date(listBook[i].schedule.startTime).getDate();
        let index = day + startDay - 1;

        booking[index] = listBook[i];
      }
    }

    setSchedule(booking);
  };

  const handleClickBooking = async (booking: any) => {
    Swal.fire({
      title: 'Hủy buổi học này?',
      text: 'Bạn có thật sự muốn hủy buổi học này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const statusCancel = await bookingApi.cancelLesson({ bookingId: booking._id });

        if (statusCancel.data) {
          Swal.fire('Hủy thành công!', 'Bạn có đặt buổi học khác!', 'success');
          setUpdate(update + 1);
        } else {
          Swal.fire('Hủy thất bại!', 'Đã có lỗi xảy ra!', 'error');
        }
      }
    });
  };

  useEffect(() => {
    getBooking();
  }, [update]);

  useEffect(() => {
    createSchedule();
  }, [listBook]);

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
        {schedule.length !== 0 &&
          schedule.map((item: any, index: number) => {
            return index >= startDay ? (
              <div className={`${className}__day ${checkDate(index + 1 - startDay, month, year)}`}>
                <div className={`${className}__text-content`}>
                  <div className={`${className}__text ${activeCurrentDay(index + 1 - startDay)}`}>
                    <small>{index + 1 - startDay}</small>
                  </div>
                </div>
                <div className={`${className}__tutor`}>
                  {item.schedule && (
                    <Avatar sx={{ width: 20, height: 20, float: 'left' }}>
                      <PersonOutlineIcon onClick={() => handleClickBooking(item)} />
                    </Avatar>
                  )}
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
