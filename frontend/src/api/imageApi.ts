import axios from 'axios';

const BASE_URL = 'http://0.0.0.0:3001';

const getImages = async () => {
  const response = await axios.get(`${BASE_URL}/images`);
  return response.data;
};

const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await axios.post(`${BASE_URL}/images/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const imageApi  = {getImages, uploadImage};