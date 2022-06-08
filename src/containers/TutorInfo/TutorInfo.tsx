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
import Comment from '../../components/Comment/Comment';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
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
  fullname: string;
  introduction: string;
  interests: string;
  profession: string;
  languages: string;
  experience: string;
  education: string;
  displayName: string;
  hometown: string;
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
  const [content, setContent] = useState('');
  const [star, setStar] = useState(0);

  const changeInput = (e: any) => {
    setContent(e.target.value);
  };
  const SubmitComment = () => {
    let comment = {
      content: content,
      star: star,
    };
    alert(`${comment.content} - ${comment.star}`);
  };
  const tutorInfo = useSelector((state: RootState) => state.tutorSlice);
  console.log('213123');
  return (
    <List className="tutor-info">
      <ListSubheader className="tutor-info__header">
        <div className="tutor-info__header__wrapper">
          <Avatar sx={{ width: 60, height: 60 }}>{tutorInfo.fullname}</Avatar>
          <div className="tutor-info__header__wrapper__content">
            <Typography variant="h5">{tutorInfo.fullname}</Typography>
            <div className="tutor-info__header__wrapper__content__rating">
              <StarIcon sx={{ color: yellow[500] }} />
              4.9
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
        {tutorInfo.languages && (
          <>
            <div className="tutor-info__body__my-info">
              <div className="tutor-info__body__my-info__header">
                <PublicIcon color="primary" />
                <Typography variant="h6" sx={{ marginLeft: '10px' }}>
                  Ngôn ngữ
                </Typography>
              </div>
              <div className="tutor-info__body__my-info__content">
                <Chip label="Tieng Viet" variant="outlined" sx={{ marginRight: '10px' }} />
                <Chip label="Tieng Anh" variant="outlined" />
              </div>
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}
        {tutorInfo.profession && (
          <>
            <Typography variant="h5">Kĩ năng</Typography>
            <div className="tutor-info__body__my-info__content">
              {tutorInfo.profession.split(' ').map((i) => (
                <Chip key={i} label={i} variant="outlined" sx={{ marginRight: '10px' }} />
              ))}
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}
        {tutorInfo.experience && (
          <>
            <Typography variant="h5">Kinh nghiệm</Typography>
            <div className="tutor-info__body__my-info__content">
              {tutorInfo.experience.split(' ').map((i) => (
                <Chip key={i} label={i} variant="outlined" sx={{ marginRight: '10px' }} />
              ))}
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}
        {tutorInfo.education && (
          <>
            <Typography variant="h5">Bằng cấp</Typography>
            <div className="tutor-info__body__my-info__content">
              {tutorInfo.education.split(' ').map((i) => (
                <Chip key={i} label={i} variant="outlined" sx={{ marginRight: '10px' }} />
              ))}
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}

        <Typography variant="h5" sx={{ marginBottom: '10px' }}>
          Lịch làm việc
        </Typography>
        {/* <Scheduler /> */}
        <Divider className="tutor-info__body__divider" />
        <Typography variant="h5" sx={{ marginBottom: '10px' }}>
          Đánh giá của ứng viên
        </Typography>
        <div className="tutor-info__body__my-info__review">
          <Comment
            id={1}
            name="Nguyen Van A"
            date="tháng 12, 2020"
            body="He has a great gift of emphaty. He listening carefully,
        and really trying to teach and share something.
        And also you feel he cares about you. Thank you Fabian."
          />
          <Comment
            id={2}
            name="Nguyen Van A"
            date="tháng 12, 2020"
            body="He has a great gift of emphaty. He listening carefully,
        and really trying to teach and share something.
        And also you feel he cares about you. Thank you Fabian."
          />
          <Comment
            id={3}
            name="Nguyen Van A"
            date="tháng 12, 2020"
            body="He has a great gift of emphaty. He listening carefully,
        and really trying to teach and share something.
        And also you feel he cares about you. Thank you Fabian."
          />
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginTop: 5 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Give some review here"
              inputProps={{ 'aria-label': 'give review' }}
              onChange={changeInput}
            />
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              onChange={(_, value) => {
                setStar(value);
              }}
            />
            <IconButton
              color="primary"
              sx={{ p: '10px' }}
              aria-label="send"
              onClick={SubmitComment}
            >
              <SendIcon />
            </IconButton>
          </Paper>
        </div>
      </ListItem>
    </List>
  );
};
