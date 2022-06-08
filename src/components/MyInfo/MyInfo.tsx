import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { updateTutorProfile, getMyProfileTutor } from '../../redux/slice/appSlice/tutorSlice';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';

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

const arrayToInfo = (arrayString: string[]) => {
  return arrayString.join(', ');
};

const modifyLanguages = (arrayObjet: object[]) => {
  const result = arrayObjet?.reduce((pre: any, cur: any) => {
    pre.push(cur.language);
    return pre;
  }, []);

  return result.join(', ');
};

const tutorInitProfile = {
  displayName: '',
  introduction: '',
  interests: '',
  profession: '',
  languages: '',
  experience: '',
  education: '',
  hometown: '',
} as tutorInfo;

const INFO_MAPPER = {
  displayName: 'Tên hiển thị',
  introduction: 'Giới thiệu',
  interests: 'Thông tin về tôi',
  profession: 'Kĩ năng',
  languages: 'Ngôn ngữ',
  experience: 'Kinh nghiệm',
  education: 'Bằng cấp',
  hometown: 'Quê',
} as tutorInfo;

export const MyInfo = () => {
  const [changeField, setChangeField] = useState([]);
  const [newValues, setNewValues] = useState({ ...tutorInitProfile });
  const fieldValue: tutorInfo = useSelector((state: RootState) => {
    const values = { ...tutorInitProfile };
    Object.keys(tutorInitProfile).map((field) => {
      if (typeof state.tutorSlice[field] === 'object') {
        if (field === 'languages') {
          console.log(state.tutorSlice[field]);

          values[field as keyof tutorInfo] = modifyLanguages(state.tutorSlice[field]);
        } else {
          values[field as keyof tutorInfo] = arrayToInfo(state.tutorSlice[field]);
        }
      } else {
        values[field as keyof tutorInfo] = state.tutorSlice[field];
      }
    });
    return values;
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await dispatch(getMyProfileTutor({ accessToken: localStorage.getItem('accessToken') }));
  };

  const handleChangeField = (prop: any) => (event: any) => {
    setNewValues({ ...newValues, [prop]: event.target.value });
  };

  const handleSubmit = (value: any) => async () => {
    const valueSubmit = { [value]: newValues[value as keyof tutorInfo] };
    await dispatch(
      updateTutorProfile({ data: valueSubmit, accessToken: localStorage.getItem('accessToken') }),
    ).then(() => {
      const temp = Array.from(changeField);

      temp.splice(
        temp.findIndex((e) => e === value),
        1,
      );

      setChangeField(temp);
    });
  };

  const handleClick = (value: any) => () => {
    const currentIndex = changeField.indexOf(value);
    const newField = [...changeField];

    if (currentIndex === -1) {
      newField.push(value);
      setChangeField(newField);
    }
  };

  return (
    <Box sx={{ width: 800 }}>
      <Typography variant="h3" color="text.secondary" marginRight={2}>
        Cập nhật thông tin
      </Typography>
      <List>
        {Object.keys(fieldValue).map((value) => (
          <div key={value}>
            <ListItem disableGutters>
              {changeField.includes(value) ? (
                <>
                  <ListItemText sx={{ flex: 1 }}>
                    {INFO_MAPPER[value as keyof tutorInfo]}
                  </ListItemText>
                  <TextField
                    sx={{ mr: 3, flex: 2 }}
                    defaultValue={
                      newValues[value as keyof tutorInfo] || fieldValue[value as keyof tutorInfo]
                    }
                    onChange={handleChangeField(value)}
                    variant="outlined"
                    size="small"
                  />
                  <Button variant="outlined" onClick={handleSubmit(value)}>
                    Lưu
                  </Button>
                </>
              ) : (
                <ListItemButton onClick={handleClick(value)}>
                  <ListItemText sx={{ flex: 1 }}>
                    {INFO_MAPPER[value as keyof tutorInfo]}
                  </ListItemText>
                  <ListItemText sx={{ flex: 2 }}>
                    {newValues[value as keyof tutorInfo] || fieldValue[value as keyof tutorInfo]}
                  </ListItemText>
                </ListItemButton>
              )}
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Box>
  );
};
