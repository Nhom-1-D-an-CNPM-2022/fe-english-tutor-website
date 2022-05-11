import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  TutorSignUpProfile,
  updateProfile,
  updateProfilePicture,
  updateTeachingCertificates,
  updateVideoIntroduction,
} from '../../redux/slice/appSlice/tutorSignUpSlice';

type Dialogs =
  | 'EDIT_PROFILE_PICTURE'
  | 'ADD_BASIC_INFO'
  | 'RECORD'
  | 'ADD_INTRODUCTION'
  | 'ADD_TEACHING_STYLE'
  | 'ADD_ABOUT_ME'
  | 'ADD_LANGUAGES'
  | 'ADD_WORK_EXPERIENCE'
  | 'ADD_EDUCATION'
  | 'ADD_TEACHING_CERTIFICATES';

interface ContextValue {
  dialog?: Dialogs;
  isErrorChecked?: boolean;
  openEditProfilePictureDialog: () => void;
  openBasicInfoDialog: () => void;
  openRecordDialog: () => void;
  openAddIntroductionDialog: () => void;
  openAddTeachingStyleDialog: () => void;
  openAddAboutMeDialog: () => void;
  openAddLanguagesDialog: () => void;
  openAddWorkExperienceDialog: () => void;
  openAddEducationDialog: () => void;
  openAddTeachingCertificatesDialog: () => void;
  handleChangeString: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => void;
  handleSaveDialog: (callback: () => boolean) => void;
  closeDialog: () => void;
  profile: TutorSignUpProfile;
  handleUpdateProfile: (newInformation: any) => void;
  handleUpdateProfilePicture: (newUrl: any) => void;
  handleUpdateVideoIntroduction: (newUrl: any) => void;
  handleUpdateTeachingCertificates: (newTeachingCertificates: any) => void;
}

export const ProfileStepContext = createContext<ContextValue>({} as any);

export default function ProfileStepProvider({
  children,
  profile,
}: {
  children: ReactNode;
  profile: TutorSignUpProfile;
}) {
  const dispatch = useDispatch();
  const [isErrorChecked, setIsErrorChecked] = useState<boolean>(false);
  const [dialog, setDialog] = useState<Dialogs>();

  useEffect(() => {
    if (dialog === undefined) {
      setTimeout(() => setIsErrorChecked(false), 100);
    }
  }, [dialog]);

  const openEditProfilePictureDialog = () => {
    setDialog('EDIT_PROFILE_PICTURE');
  };

  const openBasicInfoDialog = () => {
    setDialog('ADD_BASIC_INFO');
  };

  const openRecordDialog = () => {
    setDialog('RECORD');
  };

  const openAddIntroductionDialog = () => {
    setDialog('ADD_INTRODUCTION');
  };

  const openAddTeachingStyleDialog = () => {
    setDialog('ADD_TEACHING_STYLE');
  };

  const openAddAboutMeDialog = () => {
    setDialog('ADD_ABOUT_ME');
  };

  const openAddLanguagesDialog = () => {
    setDialog('ADD_LANGUAGES');
  };

  const openAddWorkExperienceDialog = () => {
    setDialog('ADD_WORK_EXPERIENCE');
  };

  const openAddEducationDialog = () => {
    setDialog('ADD_EDUCATION');
  };

  const openAddTeachingCertificatesDialog = () => {
    setDialog('ADD_TEACHING_CERTIFICATES');
  };

  const handleChangeString = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setter(e.target.value);
  };

  const handleSaveDialog = (callback: () => boolean) => {
    setIsErrorChecked(true);
    const isError = callback();

    if (!isError) {
      closeDialog();
    }
  };

  const closeDialog = () => {
    setDialog(undefined);
  };

  const handleUpdateProfile = (newInformation: any) => {
    dispatch(updateProfile(newInformation));
  };

  const handleUpdateProfilePicture = (newUrl: any) => {
    dispatch(updateProfilePicture(newUrl));
  };

  const handleUpdateVideoIntroduction = (newUrl: any) => {
    dispatch(updateVideoIntroduction({ URLFile: newUrl }));
  };

  const handleUpdateTeachingCertificates = (newTeachingCertificates: any) => {
    dispatch(updateTeachingCertificates(newTeachingCertificates));
  };

  return (
    <ProfileStepContext.Provider
      value={{
        dialog,
        isErrorChecked,
        openEditProfilePictureDialog,
        openBasicInfoDialog,
        openRecordDialog,
        openAddIntroductionDialog,
        openAddTeachingStyleDialog,
        openAddAboutMeDialog,
        openAddLanguagesDialog,
        openAddWorkExperienceDialog,
        openAddEducationDialog,
        openAddTeachingCertificatesDialog,
        handleChangeString,
        handleSaveDialog,
        closeDialog,
        profile,
        handleUpdateProfile,
        handleUpdateProfilePicture,
        handleUpdateVideoIntroduction,
        handleUpdateTeachingCertificates,
      }}
    >
      {children}
    </ProfileStepContext.Provider>
  );
}
