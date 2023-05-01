import { combineReducers } from '@reduxjs/toolkit';
import imageReducer from './reducers/imageReducer';

const rootReducer = combineReducers({
  images: imageReducer,
});

export default rootReducer;
