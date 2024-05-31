import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import movieReducer from './slice/movieSlice';
export const store = configureStore({
  reducer: {
    userSlice,
    movies: movieReducer,
  },
});
