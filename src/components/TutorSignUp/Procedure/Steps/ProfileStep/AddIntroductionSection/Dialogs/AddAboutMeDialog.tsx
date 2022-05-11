import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import React, { useContext, useState } from 'react';
import { ProfileStepContext } from '../../../../../../../contexts/TutorSignUpProcedure/ProfileStepContext';
import Dialog from './Dialog';
import DialogTextField from './base/DialogTextField/DialogTextField';
import { isEmptyString, TEXTAREA_INPUT_LENGTH_CONSTRAINT } from './validation';

export default function AddAboutMeDialog() {
  const {
    profile,
    dialog,
    isErrorChecked,
    handleSaveDialog,
    handleChangeString,
    handleUpdateProfile,
  } = useContext(ProfileStepContext);
  const [aboutMe, setAboutMe] = useState<string>(profile.aboutMe);

  const handleClickSave = () => {
    function callback() {
      let isError = false;

      if (isEmptyString(aboutMe)) {
        isError = true;
      }

      if (isError) {
        return true;
      } else {
        handleUpdateProfile({ aboutMe });
        return false;
      }
    }

    handleSaveDialog(callback);
  };

  return (
    <Dialog
      open={dialog === 'ADD_ABOUT_ME'}
      titleIcon={<EmojiPeopleIcon />}
      title="About me"
      onClickSave={handleClickSave}
    >
      <DialogTextField
        label="About Me"
        value={aboutMe}
        error={isErrorChecked && isEmptyString(aboutMe)}
        onChange={(e) => handleChangeString(e, setAboutMe)}
        helperText={
          isErrorChecked && isEmptyString(aboutMe) ? 'Please tell us about yourself' : undefined
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
