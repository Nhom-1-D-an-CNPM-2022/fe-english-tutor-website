import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tutorApi from '../../../services/aixos/tutorApi';

export const doGetAllTutor = createAsyncThunk('/tutor', async () => {
  return await tutorApi.getAllTutor().then((res) => res.data);
});

export const searchAllTutors = createAsyncThunk('/tutors/search', async (params: string) => {
  return await tutorApi.searchAllTutors(params).then((res) => res.data);
});

export const getTutorsProfile = createAsyncThunk('/tutors/profile/:id', async (id: string) => {
  return await tutorApi.getTutorsProfile(id).then((res) => res.data);
});

interface IInitialState {
  fullname: string;
  introduction: string;
  ageOfAccount: number;
  tutorList: any;
  status: boolean;
  message: string;
  interests: string;
  profession: string[];
}

const initialState = {
  fullname: '',
  introduction: '',
  ageOfAccount: 0,
  tutorList: [],
  status: false,
  message: '',
  interests: '',
  profession: [],
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
      state.fullname = action.payload.data.fullname;
      state.introduction = action.payload.data.introduction;
      state.interests = action.payload.data.interests;
      state.profession = action.payload.data.profession.trim().split(',');
      state.message = action.payload.message;
    });
  },
});

const { reducer, actions } = tutorSlice;
export const {} = actions;
export default reducer;
