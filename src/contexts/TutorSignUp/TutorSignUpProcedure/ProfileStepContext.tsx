import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux';
import {
  TutorSignUpProfile,
  updateProfile,
  updateTeachingCertificates,
} from '../../../redux/slice/appSlice/tutorSignUpSlice';
import { handleUploadFile } from './helpers';
import { TutorSignUpProcedureContext } from './TutorSignUpProcedureContext';

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
  profile: TutorSignUpProfile;
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
  handleUpdateProfile: (newInformation: any) => void;
  handleUpdateProfileMedia: (
    mediaType: 'profilePicture' | 'videoIntroduction' | string,
    file: File,
  ) => void;
  handleUploadTeachingCertificate: (
    file: File,
    resultSetter: (result: Record<string, string>) => void,
  ) => any;
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
  const dispatch = useAppDispatch();
  const { handleUpdateProfileMedia } = useContext(TutorSignUpProcedureContext);
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

  const handleUploadTeachingCertificate = (
    file: File,
    resultSetter: (result: Record<string, string>) => void,
  ) => {
    handleUploadFile(file, (response: any) => {
      resultSetter({
        fileName: file.name,
        url: response.url,
        publicId: response.public_id,
      });
    });
  };

  const handleUpdateTeachingCertificates = (newTeachingCertificates: any) => {
    dispatch(updateTeachingCertificates(newTeachingCertificates));
  };

  return (
    <ProfileStepContext.Provider
      value={{
        dialog,
        isErrorChecked,
        profile,
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
        handleUpdateProfile,
        handleUpdateProfileMedia,
        handleUploadTeachingCertificate,
        handleUpdateTeachingCertificates,
      }}
    >
      {children}
    </ProfileStepContext.Provider>
  );
}
