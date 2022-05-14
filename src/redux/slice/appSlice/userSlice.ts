import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../../services/aixos/userApi';

export const getInfo = createAsyncThunk('users/get-info', async () => {
  return await userApi.getInfo().then((res) => res.data);
});

interface IInitialState {
  isUser: boolean;
  OTP: string;
  isAccount: boolean;
  account: IAccount;
  status: boolean;
  message: string;
}

const initialState = {
  isUser: false,
  OTP: '',
  isAccount: false,
  account: {},
  status: false,
  message: '',
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
  },
});

const { reducer, actions } = userSlice;
export const {} = actions;
export default reducer;
