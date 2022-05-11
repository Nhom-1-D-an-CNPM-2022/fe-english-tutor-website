import SchoolIcon from '@mui/icons-material/School';
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
import {
  handleAdd,
  handleChangeDescription,
  handleChangeTags,
  handleChangeTitle,
  handleDelete,
} from './helpers';
import { isEmptyArray, isEmptyString, isInvalidDevelopment } from '../validation';

export default function AddEducationDialog() {
  const { profile, dialog, isErrorChecked, handleSaveDialog, handleUpdateProfile } =
    useContext(ProfileStepContext);
  const [education, setEducation] = useState<Development[]>(
    profile.education.map((education) => ({
      id: uuidv4(),
      ...education,
    })),
  );

  const handleClickSave = () => {
    function callback() {
      let isError = false;

      for (let i = 0; i < education.length; i++) {
        if (isInvalidDevelopment(education[i])) {
          isError = true;
          break;
        }
      }

      if (isError) {
        return true;
      } else {
        handleUpdateProfile({
          education: education.map(({ title, description, tags }) => ({
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
      open={dialog === 'ADD_EDUCATION'}
      titleIcon={<SchoolIcon />}
      title="Education"
      onClickSave={handleClickSave}
    >
      {education.map((edu, index: number) => (
        <DialogTextFieldContainer
          key={edu.id}
          flexDirection="column"
          handleDelete={() => handleDelete(education, index, setEducation)}
          optional
        >
          <DialogTextField
            value={edu.title}
            onChange={(e) => handleChangeTitle(education, index, e, setEducation)}
            error={isErrorChecked && isEmptyString(edu.title)}
            helperText={
              isErrorChecked && isEmptyString(edu.title)
                ? 'Please enter a title'
                : `${INPUT_LENGTH_CONSTRAINTS.TITLE - edu.title.length} characters remaining`
            }
            label="Title"
          />
          <DialogAutocomplete
            value={edu.tags}
            handleChange={(event, value) =>
              handleChangeTags(education, index, event, value, setEducation)
            }
            options={TAGS}
            error={isErrorChecked && isEmptyArray(edu.tags)}
            helperText={
              isErrorChecked && isEmptyArray(edu.tags) ? 'Please select at least one tag' : ' '
            }
            label="Tags"
          />
          <DialogTextField
            value={edu.description}
            onChange={(e) => handleChangeDescription(education, index, e, setEducation)}
            error={isErrorChecked && isEmptyString(edu.description)}
            helperText={
              isErrorChecked && isEmptyString(edu.description)
                ? 'Please enter a description'
                : `${
                    INPUT_LENGTH_CONSTRAINTS.DESCRIPTION - edu.description.length
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
        <Button type="text" onClick={() => handleAdd(education, setEducation)}>
          Add work
        </Button>
      </DialogContentActions>
    </Dialog>
  );
}
