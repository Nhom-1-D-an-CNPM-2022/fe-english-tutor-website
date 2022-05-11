import PublicIcon from '@mui/icons-material/Public';
import { MenuItem } from '@mui/material';
import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../../../base/Button/Button';
import {
  additionalLanguages,
  englishDialects,
  fluencyLevels,
  Language,
  mainLanguages,
} from './constants';
import Dialog from '../Dialog';
import DialogTextField from '../base/DialogTextField/DialogTextField';
import DialogTextFieldContainer from '../base/DialogTextFieldContainer/DialogTextFieldContainer';
import DialogContentActions from '../base/DialogContentActions/DialogContentActions';
import { ProfileStepContext } from '../../../../../../../../contexts/TutorSignUpProcedure/ProfileStepContext';
import { isEmptyString, isInvalidLanguage } from '../validation';

export default function AddLanguagesDialog() {
  const { profile, dialog, isErrorChecked, handleSaveDialog, handleUpdateProfile } =
    useContext(ProfileStepContext);

  const [languages, setLanguages] = useState<Language[]>(
    profile.languages.map((language) => ({
      id: uuidv4(),
      ...language,
    })),
  );

  const handleChangeLanguage = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    languages[index].language = event.target.value;
    setLanguages([...languages]);
  };

  const handleChangeDialect = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    languages[index].dialect = event.target.value;
    setLanguages([...languages]);
  };

  const handleAdd = () => {
    setLanguages([...languages, { id: uuidv4(), language: '', dialect: '' }]);
  };

  const handleDelete = (index: number) => {
    setLanguages([...languages.slice(0, index), ...languages.slice(index + 1)]);
  };

  const handleClickSave = () => {
    function callback() {
      let isError = false;

      for (let i = 0; i < languages.length; i++) {
        if (isInvalidLanguage(languages[i])) {
          isError = true;
          break;
        }
      }

      if (isError) {
        return true;
      } else {
        handleUpdateProfile({
          languages: languages.map(({ language, dialect }) => ({
            language,
            dialect,
          })),
        });
        return false;
      }
    }

    handleSaveDialog(callback);
  };

  return (
    <Dialog
      open={dialog === 'ADD_LANGUAGES'}
      titleIcon={<PublicIcon />}
      title="Languages"
      onClickSave={handleClickSave}
    >
      <DialogTextFieldContainer>
        <DialogTextField
          value={languages[0].language}
          label="Language"
          disabled
          variant="select"
          helperText=" "
          select
        >
          {mainLanguages.map((language) => (
            <MenuItem key={language} value={language}>
              {language}
            </MenuItem>
          ))}
        </DialogTextField>
        <DialogTextField
          value={languages[0].dialect}
          onChange={(e) => handleChangeDialect(0, e)}
          label="Dialect"
          error={isErrorChecked && isEmptyString(languages[0].dialect)}
          helperText={
            isErrorChecked && isEmptyString(languages[0].dialect) ? 'Please select a dialect' : ' '
          }
          variant="select"
          select
        >
          {englishDialects.map((dialect: string) => (
            <MenuItem key={dialect} value={dialect}>
              {dialect}
            </MenuItem>
          ))}
        </DialogTextField>
      </DialogTextFieldContainer>
      {languages.slice(1).map((language: Language, index: number) => (
        <DialogTextFieldContainer
          key={language.id}
          handleDelete={() => handleDelete(index + 1)}
          optional
        >
          <DialogTextField
            value={language.language}
            onChange={(e) => handleChangeLanguage(index + 1, e)}
            error={isErrorChecked && isEmptyString(language.language)}
            helperText={
              isErrorChecked && isEmptyString(language.language) ? 'Please enter a language' : ' '
            }
            label="Language"
            variant="select"
            select
          >
            {additionalLanguages.map((language) => (
              <MenuItem key={language} value={language}>
                {language}
              </MenuItem>
            ))}
          </DialogTextField>
          <DialogTextField
            value={language.dialect}
            onChange={(e) => handleChangeDialect(index + 1, e)}
            error={isErrorChecked && isEmptyString(language.dialect)}
            helperText={
              isErrorChecked && isEmptyString(language.dialect) ? 'Please select a fluency' : ' '
            }
            label="Fluency"
            variant="select"
            select
          >
            {fluencyLevels.map((level: string) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </DialogTextField>
        </DialogTextFieldContainer>
      ))}
      <DialogContentActions>
        <Button type="text" onClick={handleAdd}>
          Add language
        </Button>
      </DialogContentActions>
    </Dialog>
  );
}
