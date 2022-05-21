import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext, useState } from 'react';
import { ProfileStepContext } from '../../../../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';
import Dialog from '../Dialog';
import constants from './constants';
import UploadPhase from './UploadPhase';
import EditPhase from './EditPhase';

export default function AddProfilePictureDialog() {
  const { dialog, handleSaveDialog, closeDialog, handleUpdateProfilePicture } =
    useContext(ProfileStepContext);
  const [previewSource, setPreviewSource] = useState<string | undefined>('');

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);

    if (file) {
      previewFile(file);
    }
  };

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreviewSource(reader.result?.toString());
    };

    reader.onerror = (e) => {
      console.error(e);
    };
  };

  const handleClickSave = () => {
    function callback() {
      handleUpdateProfilePicture({ URLFile: previewSource });
      return false;
    }

    handleSaveDialog(callback);
  };

  return (
    <Dialog
      open={dialog === 'EDIT_PROFILE_PICTURE'}
      titleIcon={
        <IconButton onClick={closeDialog} size="large">
          <CloseIcon />
        </IconButton>
      }
      title={constants.TITLE}
      onClickSave={handleClickSave}
      actionsHidden={!previewSource}
    >
      {previewSource ? (
        <EditPhase previewSource={previewSource} />
      ) : (
        <UploadPhase handleFileInputChange={handleFileInputChange} />
      )}
    </Dialog>
  );
}
