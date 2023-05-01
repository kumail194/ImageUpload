import { Dispatch } from 'redux';
import {
  Image,
  ImagesActionTypes,
  UPLOAD_IMAGE_SUCCESS,
  GET_IMAGES_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  GET_IMAGES_FAILURE,
} from '../types/imageTypes';
import { AppThunk } from '../types';
import { imageApi } from '../../api/imageApi';

export const uploadImageSuccess = (image: Image): ImagesActionTypes => {
  return {
    type: UPLOAD_IMAGE_SUCCESS,
    payload: image,
  };
};

export const getImagesSuccess = (images: []): ImagesActionTypes => {
  return {
    type: GET_IMAGES_SUCCESS,
    payload: images,
  };
};

export const uploadImageFailure = (error: any): ImagesActionTypes => {
  return {
    type: UPLOAD_IMAGE_FAILURE,
    payload: error,
  };
};

export const getImagesFailure = (error: any): ImagesActionTypes => {
  return {
    type: GET_IMAGES_FAILURE,
    payload: error,
  };
};

export const uploadImage = (data: any): AppThunk => async (dispatch) => {
  try {
    const response = await imageApi.uploadImage(data);
    dispatch(uploadImageSuccess(response.data));
    return response.data;
  } catch (error: any) {
    dispatch(uploadImageFailure(error));
    throw error;
  }
};


export const getImages = (): AppThunk => async (dispatch) => {
  try {
    const response = await imageApi.getImages();
    dispatch(getImagesSuccess(response));
    return response;
  } catch (error) {
    dispatch(getImagesFailure(error));
    throw error;
  }
};
