import { formControlClasses, typographyClasses } from '@mui/material';

export const fileNameWrapperStyle = {
  width: '48%',
  overflow: 'hidden',

  [`& .${typographyClasses.root}`]: {
    marginRight: '10px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },

  [`& + .${formControlClasses.root}`]: {
    width: '48%',
  },
};
