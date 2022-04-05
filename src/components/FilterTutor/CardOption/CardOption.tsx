import React from 'react';
import './CardOption.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
interface ICardOption {
  isShow: boolean;
  data: any;
}
export const CardOption: React.FC<ICardOption> = ({ isShow, data }) => {
    console.log(data);
  return (
    <div className={`card-option ${isShow ? 'card-option__show' : ''}`}>
      <div className="card-option__item">
      <FormGroup>
        {data.map((items: any, index: number) => {
          return(<FormControlLabel control={<Checkbox defaultChecked />} label={items} key={index}/>)
        })}
      </FormGroup>
      </div>
    </div>
  );
};
