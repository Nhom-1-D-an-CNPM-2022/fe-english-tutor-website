import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import tutorSignUpApi from '../../../services/aixos/tutorSignUpApi';

export const updateProfile = createAsyncThunk(
  'tutorSignUp/updateProfile',
  async (newInformation: any) => {
    return await tutorSignUpApi.updateProfile(newInformation);
  },
);

export const updateProfilePicture = createAsyncThunk(
  'tutorSignUp/updateProfilePicture',
  async (newUrl: any) => {
    return await tutorSignUpApi.updateProfilePicture(newUrl);
  },
);

export const updateVideoIntroduction = createAsyncThunk(
  'tutorSignUp/updateVideoIntroduction',
  async (newLink: any) => {
    return await tutorSignUpApi.updateVideoIntroduction(newLink);
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
  motivation: string;
  source: string;
  otherPlatforms: Record<string, boolean>;
  teachingCertificates: Array<ITeachingCertificates> | [];
}

export type TutorSignUpProfile = IInitialState;

const initialState = {
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
  motivation: '',
  source: '',
  otherPlatforms: {
    VIPKid: false,
    GoGokid: false,
    ByteDance: false,
    Other: false,
  },
  teachingCertificates: [],
} as IInitialState;

export const tutorSignUpSlice = createSlice({
  name: 'tutorSignUp',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload.data,
        dateOfBirth: moment(action.payload.data).format('YYYY-MM-DD'),
      };
    });

    builder.addCase(updateProfilePicture.fulfilled, (state, action) => {
      state.profilePicture = action.payload.data.url;
      return state;
    });

    builder.addCase(updateVideoIntroduction.fulfilled, (state, action) => {
      state.videoIntroduction = action.payload.data.url;
      return state;
    });

    builder.addCase(updateTeachingCertificates.fulfilled, (state, action) => {
      state.teachingCertificates = action.payload.data;
      return state;
    });
  },
});

const { reducer, actions } = tutorSignUpSlice;
export const {} = actions;
export default reducer;
