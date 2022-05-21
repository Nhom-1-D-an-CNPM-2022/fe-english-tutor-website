import SchoolIcon from '@mui/icons-material/School';
import React from 'react';
import { ProfileStepContext } from '../../../../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';
import Button from '../../../../../base/Button/Button';
import Dialog from '../Dialog';
import DialogAutocomplete from '../base/DialogAutocomplete/DialogAutocomplete';
import DialogContentActions from '../base/DialogContentActions/DialogContentActions';
import DialogTextField from '../base/DialogTextField/DialogTextField';
import DialogTextFieldContainer from '../base/DialogTextFieldContainer/DialogTextFieldContainer';
import { TAGS, Development, INPUT_LENGTH_CONSTRAINTS, LIMIT_TAGS } from './constants';
import {
  clickSaveCallback,
  handleAdd,
  handleChangeDescription,
  handleChangeTags,
  handleChangeTitle,
  handleDelete,
  initDevelopmentDialog,
} from './helpers';
import { isEmptyArray, isEmptyString } from '../validation';

export default function AddEducationDialog() {
  const { profile, dialog, isErrorChecked, handleSaveDialog, handleUpdateProfile } =
    React.useContext(ProfileStepContext);
  const [education, setEducation] = React.useState<Development[]>([]);

  React.useEffect(() => {
    if (dialog === 'ADD_EDUCATION') {
      initDevelopmentDialog(profile.education, setEducation);
    }
  }, [dialog]);

  const handleClickSave = () => {
    function callback() {
      return clickSaveCallback('education', education, handleUpdateProfile);
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
            inputProps={{
              maxLength: INPUT_LENGTH_CONSTRAINTS.TITLE,
            }}
            label="Title"
          />
          <DialogAutocomplete
            value={edu.tags}
            limitTags={LIMIT_TAGS}
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
            inputProps={{
              maxLength: INPUT_LENGTH_CONSTRAINTS.DESCRIPTION,
            }}
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
