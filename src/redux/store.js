import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import generalSlice from './generalSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    general: generalSlice
  },
})