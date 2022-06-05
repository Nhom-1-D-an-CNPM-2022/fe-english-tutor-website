import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PublicIcon from '@mui/icons-material/Public';
import Chip from '@mui/material/Chip';
import { yellow } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import { Scheduler } from '../Scheduler/Scheduler';
import './TutorInfo.scss';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { getTutorsProfile } from '../../redux/slice/appSlice/tutorSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';

type tutorId = {
  id: string;
};

interface tutorInfo {
  fullname: any;
  introduction: any;
  interests: any;
  profession: any;
  languages: any;
  experience: any;
  education: any;
  displayName: any;
  hometown: any;
}

export const TutorInfo = () => {
  const { id } = useParams<tutorId>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    await dispatch(getTutorsProfile(id));
  };

  const tutorInfo = useSelector((state: RootState) => state.tutorSlice);

  return (
    <List className="tutor-info">
      <ListSubheader className="tutor-info__header">
        <div className="tutor-info__header__wrapper">
          <Avatar sx={{ width: 60, height: 60 }}>{tutorInfo.displayName}</Avatar>
          <div className="tutor-info__header__wrapper__content">
            <Typography variant="h5">{tutorInfo.displayName}</Typography>
            <div className="tutor-info__header__wrapper__content__rating">
              <StarIcon sx={{ color: yellow[500] }} />
              4.9
              <div className="tutor-info__header__wrapper__content__hometown">
                {tutorInfo.hometown}
              </div>
            </div>
          </div>
        </div>
        <Divider />
      </ListSubheader>
      <ListItem sx={{ alignItems: 'flex-start' }} className="tutor-info__body">
        <div className="tutor-info__body__introduce">
          <Typography variant="h5">{tutorInfo.fullname}</Typography>
          <Typography variant="h6">{tutorInfo.introduction}</Typography>
        </div>
        <Divider className="tutor-info__body__divider" />
        {tutorInfo.interests && (
          <>
            <div className="tutor-info__body__my-info">
              <div className="tutor-info__body__my-info__header">
                <AccessibilityNewIcon color="primary" />
                <Typography variant="h6" sx={{ marginLeft: '10px' }}>
                  Thông tin của tôi
                </Typography>
              </div>
              <Typography variant="body1" sx={{ marginLeft: '38px' }}>
                {tutorInfo.interests}
              </Typography>
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}
        {!!tutorInfo.languages.length && (
          <>
            <div className="tutor-info__body__my-info">
              <div className="tutor-info__body__my-info__header">
                <PublicIcon color="primary" />
                <Typography variant="h6" sx={{ marginLeft: '10px' }}>
                  Ngôn ngữ
                </Typography>
              </div>
              <div className="tutor-info__body__my-info__content">
                {tutorInfo.languages.map((l) => (
                  <Chip label={l.language} variant="outlined" sx={{ marginRight: '10px' }} />
                ))}
              </div>
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}
        {!!tutorInfo.profession.length && (
          <>
            <Typography variant="h5">Kĩ năng</Typography>
            <div className="tutor-info__body__my-info__content">
              {tutorInfo.profession.map((i) => (
                <Chip key={i} label={i} variant="outlined" sx={{ marginRight: '10px' }} />
              ))}
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}
        {!!tutorInfo.experience.length && (
          <>
            <Typography variant="h5">Kinh nghiệm</Typography>
            <div className="tutor-info__body__my-info__content">
              {tutorInfo.experience.map((i) => (
                <Chip key={i} label={i} variant="outlined" sx={{ marginRight: '10px' }} />
              ))}
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}
        {!!tutorInfo.education.length && (
          <>
            <Typography variant="h5">Bằng cấp</Typography>
            <div className="tutor-info__body__my-info__content">
              {tutorInfo.education.map((i) => (
                <Chip key={i} label={i} variant="outlined" sx={{ marginRight: '10px' }} />
              ))}
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}

        <Typography variant="h5" sx={{ marginBottom: '10px' }}>
          Lịch làm việc
        </Typography>
        <Scheduler />
      </ListItem>
    </List>
  );
};
