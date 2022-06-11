import React from 'react';
import {
  Box,
  BoxProps,
  dividerClasses,
  formHelperTextClasses,
  formLabelClasses,
  linkClasses,
  outlinedInputClasses,
  styled,
  typographyClasses,
} from '@mui/material';
import TutorAccountProvider from '../../contexts/TutorSignUp/TutorAccountContext';

export default styled(({ ...props }: BoxProps) => (
  <TutorAccountProvider>
    <Box {...props} />
  </TutorAccountProvider>
))({
  width: '100%',
  height: 'calc(100vh - 70px)',
  display: 'flex',
  alignItems: 'center',

  [`& .${typographyClasses.h1}, & .${typographyClasses.h6}, & .${dividerClasses.wrapper}, & .${formLabelClasses.root}, & .${outlinedInputClasses.input}, & .${formHelperTextClasses.root}`]:
    {
      fontFamily: 'Helvetica Nue ',
    },

  [`& .${typographyClasses.h1}`]: {
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: 1.235,
  },

  [`& .${typographyClasses.h6}, & .${dividerClasses.wrapper}`]: {
    fontSize: '0.9285714286rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },

  [`& .${linkClasses.root}`]: {
    fontFamily: 'Helvetica Nue',
  },
});
