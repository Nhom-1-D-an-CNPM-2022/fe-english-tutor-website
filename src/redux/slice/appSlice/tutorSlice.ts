import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tutorApi from '../../../services/aixos/tutorApi';

export const doGetAllTutor = createAsyncThunk('/tutor', async () => {
  return await tutorApi.getAllTutor().then((res) => res.data);
});

export const searchAllTutors = createAsyncThunk('/tutors/search', async (params: string) => {
  return await tutorApi.searchAllTutors(params).then((res) => res.data);
});

interface IInitialState {
  fullname: string;
  introduction: string;
  ageOfAccount: number;
  tutorList: any;
  status: boolean;
  message: string;
}

const initialState = {
  fullname: '',
  introduction: '',
  ageOfAccount: 0,
  tutorList: [],
  status: false,
  message: '',
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
  },
});

const { reducer, actions } = tutorSlice;
export const {} = actions;
export default reducer;
