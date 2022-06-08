import { Box } from '@mui/material';
import List from './base/List/List';
import ListItem from './base/ListItem/ListItem';
import React, { useContext } from 'react';
import { ProfileStepContext } from '../../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';
import { SUPPLEMENTAL_INTRODUCTION } from './constants';
import { ChipActionBox, DevelopmentActionBox, TextActionBox } from './base/ActionBoxes';
import { Development } from './base/ActionBoxes/EditActionBoxes/DevelopmentEditActionBox/constants';

export default function AddSupplementalIntroductionBox() {
  const {
    profile,
    openAddTeachingStyleDialog,
    openAddAboutMeDialog,
    openAddLanguagesDialog,
    openAddWorkExperienceDialog,
    openAddEducationDialog,
    openAddTeachingCertificatesDialog,
  } = useContext(ProfileStepContext);

  const buttonActions = [
    openAddTeachingStyleDialog,
    openAddAboutMeDialog,
    openAddLanguagesDialog,
    openAddWorkExperienceDialog,
    openAddEducationDialog,
    openAddTeachingCertificatesDialog,
  ];

  const values = [
    profile.teachingStyles,
    profile.aboutMe,
    profile.languages.map((language) => `${language.language} (${language.dialect})`),
    profile.experience,
    profile.education,
    profile.certificates.map((certificate) => certificate.type),
  ];

  return (
    <Box>
      <List>
        {SUPPLEMENTAL_INTRODUCTION.INFORMATION_LIST.map((item, index: number) => (
          <ListItem key={item.title}>
            {item.valueRepresentation === 'text' ? (
              <TextActionBox
                currentValue={values[index] as string}
                title={item.title}
                titleIcon={item.icon}
                description={item.description}
                openDialogButtonLabel={item.openDialogButtonLabel}
                onClickButton={buttonActions[index]}
                activeTitle
              />
            ) : item.valueRepresentation === 'chip' ? (
              <ChipActionBox
                currentValue={values[index] as Array<string>}
                title={item.title}
                titleIcon={item.icon}
                description={item.description}
                openDialogButtonLabel={item.openDialogButtonLabel}
                onClickButton={buttonActions[index]}
                activeTitle
              />
            ) : (
              <DevelopmentActionBox
                currentValue={values[index] as Array<Development>}
                title={item.title}
                titleIcon={item.icon}
                description={item.description}
                openDialogButtonLabel={item.openDialogButtonLabel}
                onClickButton={buttonActions[index]}
                activeTitle
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
