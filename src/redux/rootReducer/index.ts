import { combineReducers } from '@reduxjs/toolkit';
import userSlice from '../slice/appSlice/userSlice';
import tutorSlice from '../slice/appSlice/tutorSlice';
import tutorSignUpSlice from '../slice/appSlice/tutorSignUpSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartSlice'],
};
const rootReducer = combineReducers({
  userSlice,
  tutorSlice,
  tutorSignUpSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
