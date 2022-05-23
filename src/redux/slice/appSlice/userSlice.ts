import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../../services/aixos/userApi';

export const getInfo = createAsyncThunk('users/get-info', async () => {
  return await userApi.getInfo().then((res) => res.data);
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

interface IInitialState {
  isUser: boolean;
  OTP: string;
  isAccount: boolean;
  account: IAccount;
  status: boolean;
  message: string;
  favoriteTutors: any;
}

const initialState = {
  isUser: false,
  OTP: '',
  isAccount: false,
  account: {},
  status: false,
  message: '',
  favoriteTutors: [],
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
    builder.addCase(addFavoriteTutor.fulfilled, (state, action) => {
      state.favoriteTutors.push(action.payload.data);
      state.message = action.payload.message;
    });
    builder.addCase(getFavoriteTutors.fulfilled, (state, action) => {
      state.favoriteTutors = action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(getInfo.rejected, (state, action) => {
      state.isAccount = false;
    });
  },
});

const { reducer, actions } = userSlice;
export const {} = actions;
export default reducer;
