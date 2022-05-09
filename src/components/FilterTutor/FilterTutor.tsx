import React, { useEffect, useState } from 'react';
import { CardOption } from './CardOption/CardOption';
import './FilterTutor.scss';
import tutorApi from '../../services/aixos/tutorApi';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Box, Popover } from '@mui/material';
interface IFilterTutor {
  onChangeTutorListByFilter: any;
}
export const FilterTutor: React.FC<IFilterTutor> = ({ onChangeTutorListByFilter }) => {
  const [listFilter, setListFilter] = useState([
    {
      title: 'Khóa học Cambly',
      options: [
        'Basic Conversation Topics',
        'Intermediate Conversation Topics',
        'Advanced Conversation Topics',
        'English Conversation 101',
        'Business English',
        'Healthy Mind, Healthy Body',
        'Movies and Television',
        'Caring for Our Planet',
        'English Conversation 102',
        'Life in the Internet Age',
        'English for Travel',
        'Workshop: Practicing Job Interviews',
        'Intermediate Conversation Topics Part 2',
        'Advanced Business English',
        'IELTS Speaking Part 1',
        'Raising Children',
        'IELTS Speaking Part 2',
        'Workshop: Practicing Presentations',
        'IELTS Speaking Part 3',
        'IELTS Speaking Mock Tests',
        'Academic English',
        'TOEFL Speaking Practice',
        'The Exciting World of Startups',
        'Introduction to Public Speaking',
        'The Olympics',
      ],
    },
    { title: 'Cấp độ Bài học', options: ['Người mới', 'Trung cấp', 'Nâng cao'] },
    {
      title: 'Giọng nói gia sư',
      options: ['Giọng Bắc Mỹ', ' Giọng Anh', ' Giọng Úc', ' Giọng Khác'],
    },
    {
      title: 'Tính cách gia sư',
      options: ['Ân cần và Kiên nhẫn', , ' Vui nhộn và Thích giao du', 'Uyên bác và Thông thạo'],
    },
  ]);
  const [itemsSelect, setItemSelect] = useState({
    'Basic Conversation Topics': false,
    'Intermediate Conversation Topics': false,
    'Advanced Conversation Topics': false,
    'English Conversation 101': false,
    'Business English': false,
    'Healthy Mind, Healthy Body': false,
    'Movies and Television': false,
    'Caring for Our Planet': false,
    'English Conversation 102': false,
    'Life in the Internet Age': false,
    'English for Travel': false,
    'Workshop: Practicing Job Interviews': false,
    'Intermediate Conversation Topics Part 2': false,
    'Advanced Business English': false,
    'IELTS Speaking Part 1': false,
    'Raising Children': false,
    'IELTS Speaking Part 2': false,
    'Workshop: Practicing Presentations': false,
    'IELTS Speaking Part 3': false,
    'IELTS Speaking Mock Tests': false,
    'Academic English': false,
    'TOEFL Speaking Practice': false,
    'The Exciting World of Startups': false,
    'Introduction to Public Speaking': false,
    'The Olympics': false,
    'Người mới': false,
    'Trung cấp': false,
    'Nâng cao': false,
    'Giọng Bắc Mỹ': false,
    'Giọng Anh': false,
    'Giọng Úc': false,
    'Giọng Khác': false,
    'Ân cần và Kiên nhẫn': false,
    'Vui nhộn và Thích giao du': false,
    'Uyên bác và Thông thạo': false,
  });
  const onChangeCheck = async (
    event: React.ChangeEvent<HTMLInputElement>,
    onChangeTutorListByFilter: any,
  ) => {
    const name = String(event.target.name);
    setItemSelect({ ...itemsSelect, [name]: event.target.checked });
    if (event.target.checked) {
      let query = String(event.target.name);
      for (let key in itemsSelect) {
        console.log(itemsSelect[key as keyof typeof itemsSelect]);
        if (itemsSelect[key as keyof typeof itemsSelect] === true) {
          console.log('a');
          query += ` ${key}`;
        }
      }
      const response = await tutorApi.searchAllTutors(query);
      console.log(query, response);
      onChangeTutorListByFilter(response.data);
    }
  };
  useEffect(() => {});
  return (
    <div className="filter-tutor">
      {listFilter.map((items: any, index: number) => {
        return (
          <div key={index}>
            <PopupState variant="popover" popupId="schudule-class">
              {(popupState) => (
                <div>
                  <button className="filter-tutor__button" {...bindTrigger(popupState)}>
                    {items.title}
                  </button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <CardOption
                      data={items.options}
                      onChangeCheck={onChangeCheck}
                      onChangeTutorListByFilter={onChangeTutorListByFilter}
                    ></CardOption>
                  </Popover>
                </div>
              )}
            </PopupState>
          </div>
        );
      })}
    </div>
  );
};
