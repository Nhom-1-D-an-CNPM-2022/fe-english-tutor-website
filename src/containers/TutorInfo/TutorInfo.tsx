import React from 'react';
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

export const TutorInfo = () => {
  return (
    <List className="tutor-info">
      <ListSubheader className="tutor-info__header">
        <div className="tutor-info__header__wrapper">
          <Avatar sx={{ width: 60, height: 60 }}>N</Avatar>
          <div className="tutor-info__header__wrapper__content">
            <Typography variant="h5">Hoang</Typography>
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
          <Typography variant="h5">Hoang</Typography>
          <Typography variant="h6">Xin chao toi la Hoang den tu Viet Nam</Typography>
        </div>
        <Divider className="tutor-info__body__divider" />
        <div className="tutor-info__body__my-info">
          <div className="tutor-info__body__my-info__header">
            <AccessibilityNewIcon color="primary" />
            <Typography variant="h6" sx={{ marginLeft: '10px' }}>
              Thông tin của tôi
            </Typography>
          </div>
          <Typography variant="body1" sx={{ marginLeft: '38px' }}>
            I love learning about different cultures and customs. I am a documentary fanatic. I also
            enjoy cooking and talking about all things related to food. My teaching style is very
            versatile. We can approach language learning in a structured manner or we can use
            conversational topics to help you naturally master the English language.
          </Typography>
        </div>
        <Divider className="tutor-info__body__divider" />
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
        <Typography variant="h5">Giấy Chứng Nhận Nổi Bật</Typography>
        <Divider className="tutor-info__body__divider" />
        <Typography variant="h5" sx={{ marginBottom: '10px' }}>
          Lịch làm việc
        </Typography>
        <Scheduler />
      </ListItem>
    </List>
  );
};
