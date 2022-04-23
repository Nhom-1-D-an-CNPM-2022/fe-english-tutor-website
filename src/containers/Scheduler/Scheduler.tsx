import React from 'react';

import { Schedule, ScheduleInfo } from '../../components';
import { useParams } from 'react-router-dom';

export const Scheduler = () => {
  const { id }: any = useParams();

  if (id != undefined) {
    return <ScheduleInfo />;
  }

  return <Schedule />;
};
