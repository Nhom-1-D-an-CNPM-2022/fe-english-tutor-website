import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../../services/aixos/userApi';
import tutorApi from '../../../services/aixos/tutorApi';

export const getInfo = createAsyncThunk('users/get-info', async (accessToken: any) => {
  return await userApi.getInfo(accessToken).then((res) => res.data);
});

export const getInfoTutor = createAsyncThunk('tutors/get-info', async () => {
  return await tutorApi.getInfoTutor().then((res) => res.data);
});

export const addFavoriteTutor = createAsyncThunk(
  'POST:favorites/tutor',
  async ({ tutorId, accessToken }: any) => {
    return await userApi.addFavoriteTutor(tutorId, accessToken).then((res) => res.data);
  },
);

export const getFavoriteTutors = createAsyncThunk(
  'GET:favorites/tutor',
  async (accessToken: any) => {
    return await userApi.getFavoriteTutors(accessToken).then((res) => res.data);
  },
);

export const getMessages = createAsyncThunk(
  'messages/with/:userId',
  async (userId: any, accessToken: any) => {
    return await userApi.getMessages(userId, accessToken).then((res) => res.data);
  },
);

interface IInitialState {
  isUser: boolean;
  OTP: string;
  isAccount: boolean;
  account: IAccount;
  status: boolean;
  message: string;
  favoriteTutors: any;
  tutor: any;
  isTutor: boolean;
}

const initialState = {
  isUser: false,
  OTP: '',
  isAccount: false,
  account: {},
  status: false,
  message: '',
  favoriteTutors: [],
  tutor: [],
  isTutor: false,
} as IInitialState;

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInfo.fulfilled, (state, action) => {
      if (action.payload.user) {
        state.account = action.payload.user;
        state.isAccount = true;
      } else {
        state.isAccount = false;
      }
    });
    builder.addCase(getInfo.rejected, (state, action) => {
      state.isAccount = false;
    });
    builder.addCase(getInfoTutor.fulfilled, (state, action) => {
      if (action.payload.tutor) {
        state.tutor = action.payload.tutor;
        state.isTutor = true;
      } else {
        state.isTutor = false;
      }
    });
    builder.addCase(getInfoTutor.rejected, (state, action) => {
      state.isTutor = false;
    });
    builder.addCase(addFavoriteTutor.fulfilled, (state, action) => {
      state.favoriteTutors.push(action.payload.data);
      state.message = action.payload.message;
    });
    builder.addCase(getFavoriteTutors.fulfilled, (state, action) => {
      state.favoriteTutors = action.payload.data;
      state.message = action.payload.message;
    });
  },
});

const { reducer, actions } = userSlice;
export const {} = actions;
export default reducer;
