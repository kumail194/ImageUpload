import { Image, ImagesActionTypes, UPLOAD_IMAGE_SUCCESS, GET_IMAGES_SUCCESS } from '../types/imageTypes';

interface ImageState {
  images: [];
  error: string | null;
}

const initialState: ImageState = {
  images: [],
  error: null,
};

const imageReducer = (state = initialState, action: ImagesActionTypes): ImageState => {
  switch (action.type) {
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        images: [...state.images],
        error: null,
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default imageReducer;
