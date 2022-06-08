import React, { useEffect, useState } from 'react';
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
import ButtonBase from '@mui/material/ButtonBase';
import tutorApi from '../../services/aixos/tutorApi';
export const Home = () => {
  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [tutorList, setTutorList] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await tutorApi.getAllTutor();
      setTutorList((arr) => arr.concat(response.data));
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
  return (
    <div className="tutors">
      <Toolbar variant="regular" disableGutters={true} className="toolbar-container">
        <Typography variant="body1" className="typo-findtutor">
          Tìm một gia sư
        </Typography>
        <Box className="box-tutor">
          <a className="a-tutor">
            <h5 className="h5-available">Trực tuyến</h5>
          </a>
          <a className="a-tutor">
            <h5 className="h5-favourite-tutor">Gia sư yêu thích</h5>
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
        {' '}
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
                    name={item.fullname}
                    introduction={item.introduction}
                    ageOfAccount={item.ageOfAccount}
                    accent="USA"
                    id='123'
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
