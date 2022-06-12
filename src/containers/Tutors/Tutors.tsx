import React, { useContext, useEffect, useState } from 'react';
import { FilterTutor, TutorCard } from '../../components';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import tutorApi from '../../services/aixos/tutorApi';
import './Tutors.scss';
import Context from '../State/Context';
import userApi from '../../services/aixos/userApi';
import ChatBox from '../../components/ChatBox/ChatBox';

export const Tutors = () => {
  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [tutorList, setTutorList] = useState([]);
  const [isFieldOnline, setIsFieldOnline] = useState(false);
  const [tutorListAll, setTutorListAll] = useState([]);
  const [query, setQuery] = useState('');
  const [field, setField] = useState('all');
  const { iCall1, onlineTutors, getOnlineTutors } = useContext(Context);
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await tutorApi.getAllTutor();
      const favList = await userApi.getFavoriteTutors(localStorage.getItem('accessToken'));
      setTutorList((arr) => {
        const result = response.data.reduce((pre: any, cur: any) => {
          const isFav = favList.data.find((item: any) => item._id === cur.userId);
          pre.push({
            ...cur,
            isFav: !!isFav,
          });
          return pre;
        }, []);

        return arr.concat(result);
      });
    }
    fetchMyAPI();
  }, []);

  const handleSubmitSearchAllTutors = async (e: any) => {
    e.preventDefault();
    const response = await tutorApi.searchAllTutors(query);
    setTutorList(response.data);
  };

  const handleOnChange = (e: any) => {
    setQuery(e.target.value);
  };
  const onChangeTutorListByFilter = (data: any) => {
    setTutorList(data);
  };
  const handleClickField = (field: string) => {
    setField(field);
    if (field === 'online') {
      // iCall1();
      // console.log('hehe');
      setIsFieldOnline(true);
      getOnlineTutors();
      if (tutorListAll.length === 0) {
        setTutorListAll(tutorList);
      }

      setTutorList(onlineTutors);
      console.log('hung', onlineTutors);
    }
    if (field === 'all') {
      setIsFieldOnline(false);
      setTutorList(tutorListAll);
    }
  };
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     getOnlineTutors();
  //     getOnlineTutors();
  //     if (tutorListAll.length === 0) {
  //       setTutorListAll(tutorList);
  //     }
  //     setTutorList(onlineTutors);
  //     console.log('hung', onlineTutors);
  //   }, 2000);

  //   return () => clearInterval(intervalId);
  // }, [isFieldOnline]);
  const handleOnChat = () => {
    setOpenChat(true);
  };

  const handleCloseChat = () => {
    setOpenChat(false);
  };

  return (
    <div className="tutors">
      <Toolbar variant="regular" disableGutters={true} className="toolbar-container">
        <Typography variant="body1" className="typo-findtutor">
          Tìm một gia sư
        </Typography>
        <Box className="box-tutor">
          <a className="a-tutor" onClick={() => handleClickField('all')}>
            <h5 className={`h5-field ${field === 'all' ? 'h5-choose' : ''}`}>Tất cả</h5>
          </a>
          <a className="a-tutor" onClick={() => handleClickField('online')}>
            <h5 className={`h5-field ${field === 'online' ? 'h5-choose' : ''}`}>Trực tuyến</h5>
          </a>
          <a className="a-tutor" onClick={() => handleClickField('favorite')}>
            <h5 className={`h5-field ${field === 'favorite' ? 'h5-choose' : ''}`}>
              Gia sư yêu thích
            </h5>
          </a>
        </Box>
        <Box className="box-search">
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            onSubmit={handleSubmitSearchAllTutors}
          >
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Tên, ngôn ngữ, sở thích riêng"
              inputProps={{ 'aria-label': 'tên, ngôn ngữ, sở thích riêng' }}
              onChange={handleOnChange}
            />
          </Paper>
        </Box>
      </Toolbar>
      <Box className="box-tutor">
        <FilterTutor onChangeTutorListByFilter={onChangeTutorListByFilter}></FilterTutor>
      </Box>
      <div className="container-tutors">
        <div className="list-tutors">
          <div className="column-tutors">
            {tutorList &&
              tutorList.map((item, i) => {
                return (
                  <TutorCard
                    key={i}
                    name={item.displayName || item.fullname}
                    introduction={item.introduction}
                    ageOfAccount={item.ageOfAccount}
                    socketId = {item.socketId}
                    accent="USA"
                    id={item.userId || '123'}
                    isFavoriteTutor={item.isFav}
                    handleOnChat={handleOnChat}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <ChatBox open={openChat} onClose={handleCloseChat} />
    </div>
  );
};
