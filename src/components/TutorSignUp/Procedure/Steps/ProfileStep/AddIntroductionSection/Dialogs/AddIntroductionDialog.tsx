import { Avatar } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { ProfileStepContext } from '../../../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';
import Dialog from './Dialog';
import DialogTextField from './base/DialogTextField/DialogTextField';
import { isEmptyString, TEXTAREA_INPUT_LENGTH_CONSTRAINT } from './validation';

export default function AddIntroductionDialog() {
  const {
    profile,
    dialog,
    isErrorChecked,
    handleSaveDialog,
    handleChangeString,
    handleUpdateProfile,
  } = useContext(ProfileStepContext);
  const [introduction, setIntroduction] = useState<string>('');

  useEffect(() => {
    if (dialog === 'ADD_INTRODUCTION') {
      setIntroduction(profile.introduction);
    }
  }, [dialog]);

  const handleClickSave = () => {
    function callback() {
      let isError = false;

      if (isEmptyString(introduction)) {
        isError = true;
      }

      if (isError) {
        return true;
      } else {
        handleUpdateProfile({ introduction });
        return false;
      }
    }

    handleSaveDialog(callback);
  };

  return (
    <Dialog
      open={dialog === 'ADD_INTRODUCTION'}
      titleIcon={<Avatar alt="user-avatar" src="/images/avatar2.png" />}
      title="Meet Id"
      onClickSave={handleClickSave}
    >
      <DialogTextField
        label="Introduction"
        value={introduction}
        onChange={(e) => handleChangeString(e, setIntroduction)}
        error={isErrorChecked && isEmptyString(introduction)}
        helperText={
          isErrorChecked && isEmptyString(introduction) ? 'Please enter an introduction' : undefined
        }
        minRows={6}
        maxRows={9}
        inputProps={{
          maxLength: TEXTAREA_INPUT_LENGTH_CONSTRAINT,
        }}
        multiline
      />
    </Dialog>
  );
}
