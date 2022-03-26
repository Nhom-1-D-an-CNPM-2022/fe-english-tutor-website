import { combineReducers } from '@reduxjs/toolkit';
import userSlice from '../slice/appSlice/userSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartSlice'],
};
const rootReducer = combineReducers({
  userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
