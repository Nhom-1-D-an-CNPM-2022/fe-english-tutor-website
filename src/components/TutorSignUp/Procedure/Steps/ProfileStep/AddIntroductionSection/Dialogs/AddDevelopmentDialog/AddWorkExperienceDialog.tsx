import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import React from 'react';
import { ProfileStepContext } from '../../../../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';
import Button from '../../../../../base/Button/Button';
import Dialog from '../Dialog';
import DialogAutocomplete from '../base/DialogAutocomplete/DialogAutocomplete';
import DialogContentActions from '../base/DialogContentActions/DialogContentActions';
import DialogTextField from '../base/DialogTextField/DialogTextField';
import DialogTextFieldContainer from '../base/DialogTextFieldContainer/DialogTextFieldContainer';
import {
  TAGS,
  Development,
  INPUT_LENGTH_CONSTRAINTS,
  LIMIT_TAGS,
  MAX_DEVELOPMENT_ITEMS,
} from './constants';
import { isEmptyArray, isEmptyString } from '../validation';
import {
  clickSaveCallback,
  handleAdd,
  handleChangeDescription,
  handleChangeTags,
  handleChangeTitle,
  handleDelete,
  initDevelopmentDialog,
} from './helpers';

export default function AddWorkExperienceDialog() {
  const { profile, dialog, isErrorChecked, handleSaveDialog, handleUpdateProfile } =
    React.useContext(ProfileStepContext);

  const [experience, setExperience] = React.useState<Development[]>([]);

  React.useEffect(() => {
    if (dialog === 'ADD_WORK_EXPERIENCE') {
      initDevelopmentDialog(profile.experience, setExperience);
    }
  }, [dialog]);

  const handleClickSave = () => {
    function callback() {
      return clickSaveCallback('experience', experience, handleUpdateProfile);
    }

    handleSaveDialog(callback);
  };

  return (
    <Dialog
      open={dialog === 'ADD_WORK_EXPERIENCE'}
      titleIcon={<BusinessCenterIcon />}
      title="Work Experience"
      onClickSave={handleClickSave}
    >
      {experience.map((workExperience, index: number) => (
        <DialogTextFieldContainer
          key={workExperience.id}
          flexDirection="column"
          handleDelete={() => handleDelete(experience, index, setExperience)}
          optional
        >
          <DialogTextField
            value={workExperience.title}
            onChange={(e) => handleChangeTitle(experience, index, e, setExperience)}
            error={isErrorChecked && isEmptyString(workExperience.title)}
            helperText={
              isErrorChecked && isEmptyString(workExperience.title)
                ? 'Please enter a title'
                : `${
                    INPUT_LENGTH_CONSTRAINTS.TITLE - workExperience.title.length
                  } characters remaining`
            }
            inputProps={{
              maxLength: INPUT_LENGTH_CONSTRAINTS.TITLE,
            }}
            label="Title"
          />
          <DialogAutocomplete
            value={workExperience.tags}
            limitTags={LIMIT_TAGS}
            handleChange={(event, value) =>
              handleChangeTags(experience, index, event, value, setExperience)
            }
            options={TAGS}
            error={isErrorChecked && isEmptyArray(workExperience.tags)}
            helperText={
              isErrorChecked && isEmptyArray(workExperience.tags)
                ? 'Please select at least one tag'
                : ' '
            }
            label="Tags"
          />
          <DialogTextField
            value={workExperience.description}
            onChange={(e) => handleChangeDescription(experience, index, e, setExperience)}
            error={isErrorChecked && isEmptyString(workExperience.description)}
            helperText={
              isErrorChecked && isEmptyString(workExperience.description)
                ? 'Please enter a description'
                : `${
                    INPUT_LENGTH_CONSTRAINTS.DESCRIPTION - workExperience.description.length
                  } characters remaining`
            }
            label="Description"
            minRows={2}
            maxRows={6}
            inputProps={{
              maxLength: INPUT_LENGTH_CONSTRAINTS.DESCRIPTION,
            }}
            multiline
          />
        </DialogTextFieldContainer>
      ))}
      <DialogContentActions>
        <Button
          type="text"
          onClick={() => handleAdd(experience, setExperience)}
          disabled={experience.length === MAX_DEVELOPMENT_ITEMS}
        >
          Add experience
        </Button>
      </DialogContentActions>
    </Dialog>
  );
}
