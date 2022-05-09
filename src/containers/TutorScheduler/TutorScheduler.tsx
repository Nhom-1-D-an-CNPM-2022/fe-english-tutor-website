import React from 'react';

import { ScheduleTutor, ScheduleInfoTutor } from '../../components';
import { useParams } from 'react-router-dom';

export const TutorScheduler = () => {
  const { id }: any = useParams();

  if (id != undefined) {
    return <ScheduleInfoTutor />;
  }

  return <ScheduleTutor />;
};
