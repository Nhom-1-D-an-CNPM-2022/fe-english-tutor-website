import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { updateTutorProfile } from '../../redux/slice/appSlice/tutorSlice';
import { useAppDispatch } from '../../redux/store';

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

const tutorInitProfile = {
  fullname: 'Hoang',
  introduction: 'introduction value',
  interests: 'interests value',
  profession: arrayToInfo(['profession', '123']),
  languages: arrayToInfo(['languages']),
  experience: arrayToInfo(['experience']),
  education: arrayToInfo(['education']),
  displayName: 'displayName value',
  hometown: 'hometown value',
} as tutorInfo;

const INFO_MAPPER = {
  fullname: 'Họ và tên',
  introduction: 'Giới thiệu',
  interests: 'Thông tin về tôi',
  profession: 'Kĩ năng',
  languages: 'Ngôn ngữ',
  experience: 'Kinh nghiệm',
  education: 'Bằng cấp',
  displayName: 'Tên hiển thị',
  hometown: 'Quê',
};

export const MyInfo = () => {
  const [changeField, setChangeField] = useState([]);
  const [fieldValue, setFieldValue] = useState({ ...tutorInitProfile });

  const dispatch = useAppDispatch();

  const handleChangeField = (prop: any) => (event: any) => {
    setFieldValue({ ...fieldValue, [prop]: event.target.value });
  };

  const handleSubmit = async () => {
    const res = (await dispatch(updateTutorProfile(fieldValue))).payload;
    console.log(res);
  };

  const handleClick = (value: any) => () => {
    const currentIndex = changeField.indexOf(value);
    const newFiled = [...changeField];

    if (currentIndex === -1) {
      newFiled.push(value);
      setChangeField(newFiled);
    }
  };

  return (
    <Box sx={{ width: 800 }}>
      <List>
        {Object.keys(fieldValue).map((value) => (
          <div key={value}>
            <ListItem disableGutters>
              {changeField.includes(value) ? (
                <>
                  <ListItemText sx={{ flex: 1 }}>{INFO_MAPPER[value]}</ListItemText>
                  <TextField
                    sx={{ mr: 3, flex: 2 }}
                    defaultValue={fieldValue[value as keyof tutorInfo]}
                    onChange={handleChangeField(value)}
                    variant="outlined"
                    size="small"
                  />
                  <Button variant="outlined" onClick={handleSubmit}>
                    Lưu
                  </Button>
                </>
              ) : (
                <ListItemButton onClick={handleClick(value)}>
                  <ListItemText sx={{ flex: 1 }}>{INFO_MAPPER[value]}</ListItemText>
                  <ListItemText sx={{ flex: 2 }}>
                    {fieldValue[value as keyof tutorInfo]}
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
