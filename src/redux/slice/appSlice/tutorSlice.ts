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

export const getMyProfileTutor = createAsyncThunk(
  'GET: /tutor/profile/me ',
  async ({ accessToken }: any) => {
    return await tutorApi.getMyProfileTutor(accessToken).then((res) => res.data);
  },
);

export const updateTutorProfile = createAsyncThunk(
  'PUT: /tutor/profile/me',
  async ({ data, accessToken }: any) => {
    return await tutorApi.updateTutorProfile(data, accessToken).then((res) => res.data);
  },
);

const modifyValue = (obj: any) => {
  let result = [];

  if (typeof obj === 'string') {
    return result.push(obj);
  } else {
    result = obj?.reduce((pre: any, cur: any) => {
      pre.push(cur.title);
      return pre;
    }, []);
  }

  return result;
};

interface IInitialState {
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
  reviewing: any;
}

const initialState = {
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
  reviewing: []
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
      state.introduction = action.payload.introduction;
      state.interests = action.payload.interests;
      state.profession = modifyValue(action.payload.profession);
      state.languages = action.payload.languages;
      state.experience = modifyValue(action.payload.experience);
      state.education = modifyValue(action.payload.education);
      state.displayName = action.payload.displayName;
      state.hometown = action.payload.hometown;
      state.message = action.payload.message;
      state.reviewing = action.payload.reviewing;
    });
    builder.addCase(updateTutorProfile.fulfilled, (state, action) => {
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
    builder.addCase(getMyProfileTutor.fulfilled, (state, action) => {
      console.log(action.payload);

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
  },
});

const { reducer, actions } = tutorSlice;
export const {} = actions;
export default reducer;
