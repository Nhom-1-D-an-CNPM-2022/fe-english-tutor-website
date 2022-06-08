import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import tutorSignUpApi from '../../../services/aixos/tutorSignUpApi';

export const updateProfile = createAsyncThunk(
  'tutorSignUp/updateProfile',
  async (newInformation: any) => {
    return await tutorSignUpApi.updateProfile(newInformation);
  },
);

export const updateProfileMedia = createAsyncThunk(
  'tutorSignUp/updateProfileMedia',
  async (profileMedia: any) => {
    return await tutorSignUpApi.updateProfileMedia(profileMedia);
  },
);

export const updateTeachingCertificates = createAsyncThunk(
  'tutorSignUp/updateTeachingCertificates',
  async (newTeachingCertificates: any) => {
    return await tutorSignUpApi.updateTeachingCertificates(newTeachingCertificates);
  },
);

interface ILanguage {
  language: string;
  dialect: string;
}

interface IDevelopment {
  title: string;
  tags: Array<string>;
  description: string;
}

interface ITeachingCertificates {
  fileName: string;
  URLFile: string;
  type: string;
}

interface IInitialState {
  userId: string;
  displayName: string;
  hometown: string;
  dateOfBirth: string;
  profilePicture: string;
  videoIntroduction: string;
  introduction: string;
  teachingStyles: string;
  aboutMe: string;
  languages: Array<ILanguage> | [];
  experience: Array<IDevelopment> | [];
  education: Array<IDevelopment> | [];
  certificates: Array<ITeachingCertificates> | [];
  motivation: string;
  source: string;
  otherPlatforms: Record<string, boolean>;
  demoLesson: string;
  isSubmitted: boolean;
  status: 'reviewed' | 'approved' | 'rejected';
}

export type TutorSignUpProfile = IInitialState;

const initialState = {
  userId: '',
  displayName: '',
  hometown: '',
  dateOfBirth: '',
  profilePicture: '',
  videoIntroduction: '',
  introduction: '',
  teachingStyles: '',
  aboutMe: '',
  languages: [
    {
      language: 'English',
      dialect: '',
    },
  ],
  experience: [
    {
      title: '',
      description: '',
      tags: [],
    },
  ],
  education: [
    {
      title: '',
      description: '',
      tags: [],
    },
  ],
  certificates: [],
  motivation: '',
  source: '',
  otherPlatforms: {
    VIPKid: false,
    GoGokid: false,
    ByteDance: false,
    Other: false,
  },
  demoLesson: '',
  isSubmitted: false,
  status: 'reviewed',
} as IInitialState;

export const tutorSignUpSlice = createSlice({
  name: 'tutorSignUp',
  initialState: initialState,
  reducers: {
    setProfile(_, action) {
      return {
        ...initialState,
        ...action.payload,
        languages:
          action.payload.languages.length === 0 ? initialState.languages : action.payload.languages,
        ...(action.payload.dateOfBirth && {
          dateOfBirth: moment(action.payload.dateOfBirth).format('YYYY-MM-DD'),
        }),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload.data,
        languages:
          action.payload.data.languages.length === 0
            ? initialState.languages
            : action.payload.data.languages,
        dateOfBirth: moment(action.payload.data).format('YYYY-MM-DD'),
      };
    });

    builder.addCase(updateProfileMedia.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload.data,
      };
    });

    builder.addCase(updateTeachingCertificates.fulfilled, (state, action) => {
      state.certificates = action.payload.data;
      return state;
    });
  },
});

const { reducer, actions } = tutorSignUpSlice;
export const { setProfile } = actions;
export default reducer;
