import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import React, { useContext, useEffect, useState } from 'react';
import { ProfileStepContext } from '../../../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';
import Dialog from './Dialog';
import DialogTextField from './base/DialogTextField/DialogTextField';
import { isEmptyString, TEXTAREA_INPUT_LENGTH_CONSTRAINT } from './validation';

export default function AddTeachingStyleDialog() {
  const {
    profile,
    dialog,
    isErrorChecked,
    handleSaveDialog,
    handleChangeString,
    handleUpdateProfile,
  } = useContext(ProfileStepContext);
  const [teachingStyles, setTeachingStyles] = useState<string>('');

  useEffect(() => {
    if (dialog === 'ADD_TEACHING_STYLE') {
      setTeachingStyles(profile.teachingStyles);
    }
  }, [dialog]);

  const handleClickSave = () => {
    function callback() {
      let isError = false;

      if (isEmptyString(teachingStyles)) {
        isError = true;
      }

      if (isError) {
        return true;
      } else {
        handleUpdateProfile({ teachingStyles });
        return false;
      }
    }

    handleSaveDialog(callback);
  };

  return (
    <Dialog
      open={dialog === 'ADD_TEACHING_STYLE'}
      titleIcon={<HistoryEduIcon />}
      title="Teaching Style"
      onClickSave={handleClickSave}
    >
      <DialogTextField
        label="Teaching Style"
        value={teachingStyles}
        error={isErrorChecked && isEmptyString(teachingStyles)}
        onChange={(e) => handleChangeString(e, setTeachingStyles)}
        helperText={
          isErrorChecked && isEmptyString(teachingStyles)
            ? 'Please explain your teaching style'
            : undefined
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
