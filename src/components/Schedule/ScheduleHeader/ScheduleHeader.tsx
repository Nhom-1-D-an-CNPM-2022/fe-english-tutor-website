import React from 'react';
import './ScheduleHeader.scss';

interface IScheduleHeader {
  month: number;
  year: number;
  handleChange: any;
}

export const ScheduleHeader = ({ month, year, handleChange }: IScheduleHeader) => {
  const className = 'scheduleHeader';

  return (
    <div className={className}>
      <div className={`${className}__btn ${className}__text`}>
        <span className={`${className}__label`}>Ngày hôm nay</span>
        <span className={`${className}__root`}></span>
      </div>
      <div className={`${className}__btn ${className}__icon`} onClick={() => handleChange('down')}>
        <span className={`${className}__label`}>
          <i className="fa-solid fa-angle-left"></i>
        </span>
        <span className={`${className}__root`}></span>
      </div>
      <div className={`${className}__btn ${className}__icon`} onClick={() => handleChange('up')}>
        <span className={`${className}__label`}>
          <i className="fa-solid fa-angle-right"></i>
        </span>
        <span className={`${className}__root`}></span>
      </div>
      <h2 className={`${className}__title`}>
        tháng {month + 1} {year}
      </h2>
    </div>
  );
};
