import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface IInitialState {
  
}
const initialState = {
  
} as IInitialState;

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,

  reducers: {},
  extraReducers: (builder) => {
  }
});

const { reducer, actions } = homeSlice;
export const {} = actions;
export default reducer;
