import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';
import React from 'react';
import Dialog from '../Dialog';
import { isEmptyString } from '../validation';
import DialogTextField from '../base/DialogTextField/DialogTextField';
import {
  DATE_OF_BIRTH_HELPER_TEXT,
  DISPLAY_NAME_HELPER_TEXT,
  HOMETOWN_HELPER_TEXT,
} from './constants';
import { ProfileStepContext } from '../../../../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';

export default function AddBasicInfoDialog() {
  const {
    profile,
    dialog,
    isErrorChecked,
    handleSaveDialog,
    handleChangeString,
    handleUpdateProfile,
  } = React.useContext(ProfileStepContext);

  const [displayName, setDisplayName] = React.useState<string>('');
  const [hometown, setHometown] = React.useState<string>('');
  const [dateOfBirth, setDateOfBirth] = React.useState<string>('');

  React.useEffect(() => {
    if (dialog === 'ADD_BASIC_INFO') {
      setDisplayName(profile.displayName);
      setHometown(profile.hometown);
      setDateOfBirth(profile.dateOfBirth);
    }
  }, [dialog]);

  const handleClickSave = () => {
    function callback() {
      let isError = false;

      if (isEmptyString(displayName) || isEmptyString(hometown) || isEmptyString(dateOfBirth)) {
        isError = true;
      }

      if (isError) {
        return true;
      } else {
        handleUpdateProfile({ displayName, hometown, dateOfBirth });
        return false;
      }
    }

    handleSaveDialog(callback);
  };

  return (
    <Dialog
      open={dialog === 'ADD_BASIC_INFO'}
      titleIcon={<PersonIcon />}
      title="Basic Info"
      onClickSave={handleClickSave}
    >
      <Box>
        <DialogTextField
          label="Display Name"
          value={displayName}
          error={isErrorChecked && isEmptyString(displayName)}
          helperText={
            isErrorChecked && isEmptyString(displayName)
              ? DISPLAY_NAME_HELPER_TEXT.error
              : DISPLAY_NAME_HELPER_TEXT.normal
          }
          onChange={(e) => handleChangeString(e, setDisplayName)}
        />
        <DialogTextField
          label="From"
          value={hometown}
          error={isErrorChecked && isEmptyString(hometown)}
          helperText={
            isErrorChecked && isEmptyString(hometown)
              ? HOMETOWN_HELPER_TEXT.error
              : HOMETOWN_HELPER_TEXT.normal
          }
          onChange={(e) => handleChangeString(e, setHometown)}
        />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DialogTextField
            label="Date of birth"
            value={dateOfBirth}
            error={isErrorChecked && isEmptyString(dateOfBirth)}
            onChange={(e) => handleChangeString(e, setDateOfBirth)}
            type="date"
            helperText={
              isErrorChecked && isEmptyString(dateOfBirth)
                ? DATE_OF_BIRTH_HELPER_TEXT.error
                : DATE_OF_BIRTH_HELPER_TEXT.normal
            }
          />
        </LocalizationProvider>
      </Box>
    </Dialog>
  );
}
