import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProfileStepContext } from '../../../../../../../../contexts/TutorSignUpProcedure/ProfileStepContext';
import Button from '../../../../../base/Button/Button';
import Dialog from '../Dialog';
import DialogAutocomplete from '../base/DialogAutocomplete/DialogAutocomplete';
import DialogContentActions from '../base/DialogContentActions/DialogContentActions';
import DialogTextField from '../base/DialogTextField/DialogTextField';
import DialogTextFieldContainer from '../base/DialogTextFieldContainer/DialogTextFieldContainer';
import { TAGS, Development, INPUT_LENGTH_CONSTRAINTS } from './constants';
import { isEmptyArray, isEmptyString, isInvalidDevelopment } from '../validation';
import {
  handleAdd,
  handleChangeDescription,
  handleChangeTags,
  handleChangeTitle,
  handleDelete,
} from './helpers';

export default function AddWorkExperienceDialog() {
  const { profile, dialog, isErrorChecked, handleSaveDialog, handleUpdateProfile } =
    useContext(ProfileStepContext);

  const [experience, setExperience] = useState<Development[]>(
    profile.experience.map((workExperience) => ({
      id: uuidv4(),
      ...workExperience,
    })),
  );

  const handleClickSave = () => {
    function callback() {
      let isError = false;

      for (let i = 0; i < experience.length; i++) {
        if (isInvalidDevelopment(experience[i])) {
          isError = true;
          break;
        }
      }

      if (isError) {
        return true;
      } else {
        handleUpdateProfile({
          experience: experience.map(({ title, description, tags }) => ({
            title,
            description,
            tags,
          })),
        });
        return false;
      }
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
            label="Title"
          />
          <DialogAutocomplete
            value={workExperience.tags}
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
            multiline
          />
        </DialogTextFieldContainer>
      ))}
      <DialogContentActions>
        <Button type="text" onClick={() => handleAdd(experience, setExperience)}>
          Add experience
        </Button>
      </DialogContentActions>
    </Dialog>
  );
}
