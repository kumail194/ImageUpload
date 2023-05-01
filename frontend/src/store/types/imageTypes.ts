export interface Image {
  id: string;
  url: string;
}

export interface ErrorState {
  message: string | null;
}

export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';
export const GET_IMAGES_FAILURE = 'GET_IMAGES_FAILURE';

interface UploadImageSuccessAction {
  type: typeof UPLOAD_IMAGE_SUCCESS;
  payload: Image;
}

interface GetImagesSuccessAction {
  type: typeof GET_IMAGES_SUCCESS;
  payload: [];
}

interface UploadImageFailureAction {
  type: typeof UPLOAD_IMAGE_FAILURE;
  payload: ErrorState;
}

interface GetImagesFailureAction {
  type: typeof GET_IMAGES_FAILURE;
  payload: ErrorState;
}

export type ImagesActionTypes = UploadImageSuccessAction | GetImagesSuccessAction | UploadImageFailureAction | GetImagesFailureAction;