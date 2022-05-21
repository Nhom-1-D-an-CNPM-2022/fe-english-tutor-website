import { Box, FormControlLabel, FormGroup, MenuItem, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../base/Button/Button';
import Checkbox from '../../base/Checkbox/Checkbox';
import Divider from '../../base/Divider/Divider';
import DialogTextField from '../ProfileStep/AddIntroductionSection/Dialogs/base/DialogTextField/DialogTextField';
import TutorSignUpStep from '../TutorSignUpStep';
import TutorSignUpStepBody from '../TutorSignUpStepBody';
import TutorSignUpStepFooter from '../TutorSignUpStepFooter';
import TutorSignUpStepHeader from '../TutorSignUpStepHeader';
import {
  BODY_TYPOGRAPHY,
  HEADER_TYPOGRAPHY,
  INPUT_LENGTH_CONSTRAINTS,
  OtherPlatform,
  OTHER_PLATFORMS,
  Source,
  SOURCES,
} from './constants';
import { formGroupStyle } from './style';
import React from 'react';
import { TutorSignUpProcedureContext } from '../../../../../contexts/TutorSignUp/TutorSignUpProcedure/TutorSignUpProcedureContext';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../../../../redux/slice/appSlice/tutorSignUpSlice';
import { isOtherPlatformsChanged, isSupplementalQuestionsCompleted } from './validation';

export default function TutorSignUpSupplementalStep() {
  const dispatch = useDispatch();
  const { profile, setStepCompleted } = React.useContext(TutorSignUpProcedureContext);
  const [isErrorChecked, setIsErrorChecked] = React.useState<boolean>(false);
  const [motivation, setMotivation] = React.useState<string>(profile.motivation);
  const [source, setSource] = React.useState<Source>(profile.source as Source);
  const [otherPlatforms, setOtherPlatforms] = React.useState<Record<OtherPlatform, boolean>>(
    OTHER_PLATFORMS.reduce((obj, cur) => ({ ...obj, [cur]: profile.otherPlatforms[cur] }), {}),
  );

  const handleChangeMotivation = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMotivation(e.target.value);
  };

  const handleChangeSource = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSource(e.target.value as Source);
  };

  const handleChangeOtherPlatforms = (
    _: React.SyntheticEvent<Element, Event>,
    checked: boolean,
    platform: OtherPlatform,
  ) => {
    otherPlatforms[platform] = checked;
    setOtherPlatforms({ ...otherPlatforms });
  };

  const handleClickSave = () => {
    setIsErrorChecked(true);
    dispatch(updateProfile({ motivation, source, otherPlatforms }));
  };

  return (
    <TutorSignUpStep>
      <TutorSignUpStepHeader
        title={HEADER_TYPOGRAPHY.TITLE}
        description={HEADER_TYPOGRAPHY.DESCRIPTION}
      />
      <Divider mt={2} mb={2} borderWidth={0} />
      <TutorSignUpStepBody>
        <DialogTextField
          value={motivation}
          onChange={handleChangeMotivation}
          label={BODY_TYPOGRAPHY.MOTIVATION.LABEL}
          placeholder={BODY_TYPOGRAPHY.MOTIVATION.PLACEHOLDER}
          error={isErrorChecked && !motivation}
          helperText={
            isErrorChecked && !motivation
              ? 'Please explain your motivation'
              : `${INPUT_LENGTH_CONSTRAINTS.MOTIVATION - motivation.length} characters remaining`
          }
          color="secondary"
          minRows={6}
          maxRows={9}
          inputProps={{
            maxLength: INPUT_LENGTH_CONSTRAINTS.MOTIVATION,
          }}
          multiline
        />
        <Divider mt={2.3} mb={0} borderWidth={0} />
        <Box>
          <Typography>{BODY_TYPOGRAPHY.SOURCE.LABEL}</Typography>
          <Divider mt={0.25} mb={0} borderWidth={0} />
          <DialogTextField
            value={source}
            onChange={handleChangeSource}
            color="secondary"
            error={isErrorChecked && !source}
            helperText={
              isErrorChecked && !source
                ? 'Please choose one source that you hear about Cambly'
                : ' '
            }
            select
          >
            {SOURCES.map((source) => (
              <MenuItem key={source} value={source}>
                {source}
              </MenuItem>
            ))}
          </DialogTextField>
        </Box>
        <Box>
          <Typography>{BODY_TYPOGRAPHY.OTHER_PLATFORMS.LABEL}</Typography>
          <FormGroup sx={formGroupStyle}>
            {OTHER_PLATFORMS.map((platform) => (
              <FormControlLabel
                key={platform}
                onChange={(event, checked) => handleChangeOtherPlatforms(event, checked, platform)}
                label={platform}
                control={<Checkbox checked={otherPlatforms[platform]} />}
              />
            ))}
          </FormGroup>
        </Box>
        <Divider mt={1.25} mb={0} borderWidth={0} />
        <Stack direction="row" justifyContent="center">
          <Button
            onClick={handleClickSave}
            type="contained"
            size="large"
            color="secondary"
            disabled={
              !(
                motivation !== profile.motivation ||
                source !== profile.source ||
                isOtherPlatformsChanged(otherPlatforms, profile.otherPlatforms)
              )
            }
          >
            Save answers
          </Button>
        </Stack>
      </TutorSignUpStepBody>
      <TutorSignUpStepFooter>
        <Button
          type="contained"
          endIcon={<ArrowForwardIcon />}
          disabled={!isSupplementalQuestionsCompleted(profile)}
          onClick={() => setStepCompleted('supplemental')}
        >
          Continue to connection test
        </Button>
      </TutorSignUpStepFooter>
    </TutorSignUpStep>
  );
}
