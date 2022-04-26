import React from 'react';
import './CardOption.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
interface ICardOption {
  isShow: boolean;
  data: any;
  onChangeCheck: any;
  onChangeTutorListByFilter: any;
}
export const CardOption: React.FC<ICardOption> = ({
  isShow,
  data,
  onChangeCheck,
  onChangeTutorListByFilter,
}) => {
  return (
    <div className={`card-option ${isShow ? 'card-option__show' : ''}`}>
      <div className="card-option__item">
        <FormGroup>
          {data.map((items: any, index: number) => {
            return (
              <FormControlLabel
                control={<Checkbox />}
                label={items}
                key={index}
                name={items}
                onChange={(e) => onChangeCheck(e, onChangeTutorListByFilter)}
              />
            );
          })}
        </FormGroup>
      </div>
    </div>
  );
};
