import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import { red } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import './TutorCard.scss'
export const TutorCard = () => {
  return (
    <Paper square={true} variant="elevation" className='paper-cardtutor'>
    <Card sx={{ maxWidth: 450 }}>
    <CardHeader
        avatar={
          <Avatar 
          sx={{ bgcolor: red[500], width: 100, height: 100 }} 
          aria-label="recipe" 
          variant="rounded"
          src="https://camblyavatars.s3.amazonaws.com/61bf79e366aed2273a8c1060s200?h=142b2cdd9281b1496ba36e3807428a45">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <FavoriteIcon/>
          </IconButton>
        }
        title={
            <span className='tutor-name'>Ms. Keiko</span>
        }
        subheader={
            <div className="sub-header">
                <span className="tutor-archivement">
                <SvgIcon className='archivement-icon'>
                    <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                </SvgIcon>
                Tài năng mới
                </span>
                <br/>
                <span className="accent">
                    <img src="https://www.cambly.com/static/images/country-flag-icons/US.png" alt="Giọng Mỹ" className='accent-img'/>
                    USA
                </span>
            </div>
        }
      />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        Hi my name is Ms. Keiko and I have been a Special Education teacher for over 20 years. I just moved to Spain and I am also learning a new...
      </Typography>
    </CardContent>
    <CardActions className='card-footer'>
      <Button size="small" className='button-footer'>Tin nhắn</Button>
      <Button size="small" className='button-footer'>Hồ sơ</Button>
    </CardActions>
  </Card>
  </Paper>
  );
}