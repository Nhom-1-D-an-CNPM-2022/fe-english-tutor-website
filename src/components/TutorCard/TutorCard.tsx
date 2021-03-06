import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router-dom';
import { red } from '@mui/material/colors';
import { useAppDispatch } from '../../redux/store';
import { addFavoriteTutor } from '../../redux/slice/appSlice/userSlice';
import { CardActionArea } from '@mui/material';
import './TutorCard.scss';
import Context from '../../containers/State/Context';
import userApi from '../../services/aixos/userApi';
interface ITutorCard {
  name?: string;
  accent?: string;
  introduction?: string;
  ageOfAccount?: number;
  socketId?: string;
  id: string;
  isFavoriteTutor?: boolean;
  handleOnChat: () => void;
}

export const TutorCard: React.FC<ITutorCard> = ({
  name,
  accent,
  introduction,
  ageOfAccount,
  socketId,
  id,
  isFavoriteTutor = false,
  handleOnChat,
}) => {
  const { iCall1, startChat } = React.useContext(Context);
  const history = useHistory();
  const [isHoverFavoriteButton, setIsHoverFavoriteButton] = React.useState(false);
  const [tempFavorite, setTempFavorite] = React.useState(null);
  const dispatch = useAppDispatch();

  const onMouseIn = () => {
    setIsHoverFavoriteButton(true);
  };
  const onMouseOut = () => {
    setIsHoverFavoriteButton(false);
  };

  const handleOnClick = () => {
    if (!isHoverFavoriteButton) {
      console.log(id)
      window.open(`/student/tutors/${id}`,'_self');
    }
  };

  const handleClickFavoriteTutor = async () => {
    setTempFavorite(!newIsFavorite);

    await dispatch(
      addFavoriteTutor({ tutorId: id, accessToken: localStorage.getItem('accessToken') }),
    );
  };

  const handleOnClickChat = () => {
    startChat({
      userId: id,
      socketId: '',
    });

    handleOnChat();
  };

  const newIsFavorite = tempFavorite !== null ? tempFavorite : isFavoriteTutor;

  return (
    <Paper
      square={true}
      variant="elevation"
      className="paper-cardtutor"
      sx={{ marginRight: '10px' }}
    >
      <Card sx={{ width: 480 }} onClick={handleOnClick}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500], width: 100, height: 100 }}
              aria-label="recipe"
              variant="rounded"
              src="https://camblyavatars.s3.amazonaws.com/61bf79e366aed2273a8c1060s200?h=142b2cdd9281b1496ba36e3807428a45"
            ></Avatar>
          }
          action={
            <IconButton
              aria-label="settings"
              onMouseOver={onMouseIn}
              onMouseOut={onMouseOut}
              onClick={handleClickFavoriteTutor}
            >
              <FavoriteIcon sx={{ color: newIsFavorite ? red[500] : '' }} />
            </IconButton>
          }
          title={<span className="tutor-name">{name}</span>}
          subheader={
            <div className="sub-header">
              <span className="tutor-archivement">
                <SvgIcon className="archivement-icon">
                  <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
                </SvgIcon>
                T??i n??ng m???i
              </span>
              <br />
              <span className="accent">
                <img
                  src="https://www.cambly.com/static/images/country-flag-icons/US.png"
                  alt="Gi???ng M???"
                  className="accent-img"
                />
                {accent}
              </span>
            </div>
          }
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {introduction}
          </Typography>
        </CardContent>

        <CardActions className="card-footer">
          <Button
            size="small"
            className="button-footer"
            onMouseOver={onMouseIn}
            onMouseOut={onMouseOut}
            onClick={handleOnClickChat}
          >
            Tin nh???n
          </Button>
          <Button
            size="small"
            className="button-footer"
            onMouseOver={onMouseIn}
            onMouseOut={onMouseOut}
            onClick={async()=>{await iCall1(socketId); history.push ('/videoCall');}}
          >
            G???i
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};
