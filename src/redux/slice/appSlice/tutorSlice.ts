import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { type } from 'jquery';
import tutorApi from '../../../services/aixos/tutorApi';

export const doGetAllTutor = createAsyncThunk('/tutor', async () => {
  return await tutorApi.getAllTutor().then((res) => res.data);
});

export const searchAllTutors = createAsyncThunk('/tutors/search', async (params: string) => {
  return await tutorApi.searchAllTutors(params).then((res) => res.data);
});

export const getTutorsProfile = createAsyncThunk('/tutors/profile/:id', async (id: string) => {
  return await tutorApi.getTutorsProfile(id).then((res) => {
    return res.data;
  });
});

export const updateTutorProfile = createAsyncThunk(
  '/tutor/profile/me',
  async ({ data, accessToken }: any) => {
    return await tutorApi.updateTutorProfile(data, accessToken).then((res) => res.data);
  },
);

const modifyValue = (obj: any) => {
  if (typeof obj === 'string') {
    return [obj];
  }

  return obj.reduce((pre: any, cur: any) => {
    pre.push(cur.title);
    return pre;
  }, []);
};

interface IInitialState {
  fullname: any;
  introduction: any;
  ageOfAccount: number;
  tutorList: any;
  status: boolean;
  message: string;
  interests: any;
  profession: any;
  languages: any;
  experience: any;
  education: any;
  displayName: any;
  hometown: any;
}

const initialState = {
  fullname: '',
  introduction: '',
  ageOfAccount: 0,
  tutorList: [],
  status: false,
  message: '',
  interests: '',
  profession: '',
  languages: '',
  experience: '',
  education: '',
  displayName: '',
  hometown: '',
} as IInitialState;

export const tutorSlice = createSlice({
  name: 'tutor',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetAllTutor.fulfilled, (state, action) => {
      state.tutorList = action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(searchAllTutors.fulfilled, (state, action) => {
      state.tutorList = action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(getTutorsProfile.fulfilled, (state, action) => {
      state.fullname = action.payload.fullname;
      state.introduction = action.payload.introduction;
      state.interests = action.payload.interests;
      state.profession = modifyValue(action.payload.profession);
      state.languages = action.payload.languages;
      state.experience = modifyValue(action.payload.experience);
      state.education = modifyValue(action.payload.education);
      state.displayName = action.payload.displayName;
      state.hometown = action.payload.hometown;
      state.message = action.payload.message;
    });
    builder.addCase(updateTutorProfile.fulfilled, (state, action) => {
      state.fullname = action.payload.data.fullname;
      state.introduction = action.payload.data.introduction;
      state.interests = action.payload.data.interests;
      state.profession = action.payload.data.profession?.join(', ');
      state.languages = action.payload.data.languages?.join(', ');
      state.experience = action.payload.data.experience?.join(', ');
      state.education = action.payload.data.education?.join(', ');
      state.displayName = action.payload.data.displayName;
      state.hometown = action.payload.data.hometown;
    });
  },
});

const { reducer, actions } = tutorSlice;
export const {} = actions;
export default reducer;
