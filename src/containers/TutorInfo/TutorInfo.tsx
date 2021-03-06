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
import axios from 'axios';

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
  reviewing: any;
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
  const SubmitComment = async () => {
    let comment = {
      content: content,
      star: star,
    };
    const commentBody = {
      tutorId: id,
      comment: comment.content,
      rating: comment.star
    };
    console.log(commentBody);
   
    try{
    const {data} = await axios.put(`${process.env.URL_MY_API}tutors/review`, commentBody, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((res) => {location.reload()});
  } catch (err : any) {
      console.log(err.response);
  }
  };
  const tutorInfo = useSelector((state: RootState) => state.tutorSlice);
  console.log(tutorInfo);
  
  console.log('213123');
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
                  Th??ng tin c???a t??i
                </Typography>
              </div>
              <Typography variant="body1" sx={{ marginLeft: '38px' }}>
                {tutorInfo.interests}
              </Typography>
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}
        {!!tutorInfo.languages?.length && (
          <>
            <div className="tutor-info__body__my-info">
              <div className="tutor-info__body__my-info__header">
                <PublicIcon color="primary" />
                <Typography variant="h6" sx={{ marginLeft: '10px' }}>
                  Ng??n ng???
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
        {!!tutorInfo.profession?.length && (
          <>
            <Typography variant="h5">K?? n??ng</Typography>
            <div className="tutor-info__body__my-info__content">
              {tutorInfo.profession.map((i) => (
                <Chip key={i} label={i} variant="outlined" sx={{ marginRight: '10px' }} />
              ))}
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}
        {!!tutorInfo.experience?.length && (
          <>
            <Typography variant="h5">Kinh nghi???m</Typography>
            <div className="tutor-info__body__my-info__content">
              {tutorInfo.experience.map((i) => (
                <Chip key={i} label={i} variant="outlined" sx={{ marginRight: '10px' }} />
              ))}
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}
        {!!tutorInfo.education?.length && (
          <>
            <Typography variant="h5">B???ng c???p</Typography>
            <div className="tutor-info__body__my-info__content">
              {tutorInfo.education.map((i) => (
                <Chip key={i} label={i} variant="outlined" sx={{ marginRight: '10px' }} />
              ))}
            </div>
            <Divider className="tutor-info__body__divider" />
          </>
        )}

        <Typography variant="h5" sx={{ marginBottom: '10px' }}>
          L???ch l??m vi???c
        </Typography>
        {/* <Scheduler /> */}
        <Divider className="tutor-info__body__divider" />
        <Typography variant="h5" sx={{ marginBottom: '10px' }}>
          ????nh gi?? c???a ???ng vi??n
        </Typography>
        <div className="tutor-info__body__my-info__review">
        {tutorInfo.reviewing.map ( (item: any, key: any) =>
          <Comment
            id={key}
            name={item.userId}
            body={item.comment}
          />
          )} 
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
