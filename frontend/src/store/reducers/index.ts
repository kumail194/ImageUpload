import { combineReducers } from '@reduxjs/toolkit';
import imageReducer from './imageReducer';

const rootReducer = combineReducers({
  images: imageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
