import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../../services/aixos/userApi';

export const getInfo = createAsyncThunk('users/get-info', async (params: any) => {
  return await userApi.getInfo(params).then((res) => res.data);
});

export const updateInfo = createAsyncThunk('user/update-info', async (params: any) => {
  return await userApi.updateInfo(params).then((res) => res.data);
});

export const addInformationVAT = createAsyncThunk(
  'user/add-information-vat',
  async (params: any) => {
    return await userApi.addInformationVAT(params).then((res) => res.data);
  },
);

export const getInformationVAT = createAsyncThunk(
  'user/get-information-vat',
  async (params: any) => {
    return await userApi.getInformationVAT(params).then((res) => res.data);
  },
);

export const addUserAddress = createAsyncThunk('user/add-user-address', async (params: any) => {
  return await userApi.addUserAddress(params).then((res) => res.data);
});

export const updateUserAddress = createAsyncThunk(
  'user/update-user-address',
  async (params: any) => {
    return await userApi.updateUserAddress(params).then((res) => res.data);
  },
);

export const getAllUserAddress = createAsyncThunk('user/get-all-address', async (params: any) => {
  return await userApi.getAllUserAddress(params).then((res) => res.data);
});

export const getUserAddress = createAsyncThunk('user/get-address', async (params: any) => {
  return await userApi.getUserAddress(params).then((res) => res.data);
});

export const deleteUserAddress = createAsyncThunk(
  'user/delete-user-address',
  async (params: any) => {
    return await userApi.deleteUserAddress(params).then((res) => res.data);
  },
);
export const doGetUserAddress = createAsyncThunk(
  'user/get-all-address',
  async(params: any) => {
  return await userApi.getUserAddress(params).then((res) => res.data);
});

export const doGetAllUser = createAsyncThunk('user/get-all-user', async () => {
  return await userApi.getAllUser().then((res) => res.data);
});

export const doChangeActiveUser = createAsyncThunk('user/active-user', async (params: any) => {
  return await userApi.activeUser(params).then((res) => res.data);
});

export const doChangeRoleUser = createAsyncThunk('user/role-user', async (params: any) => {
  return await userApi.changeRoleUser(params).then((res) => res.data);
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
      if (action.payload.data) {
        state.account = action.payload.data;
        state.isAccount = true;
      } else {
        state.isAccount = false;
      }
    });
    builder.addCase(updateInfo.fulfilled, (state, action) => {
      state.status = action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(addInformationVAT.fulfilled, (state, action) => {
      state.status = action.payload.data;
      state.message = action.payload.message;
    });
  },
});

const { reducer, actions } = userSlice;
export const {} = actions;
export default reducer;
