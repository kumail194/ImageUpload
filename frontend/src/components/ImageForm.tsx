import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getImages, uploadImage } from '../store/actions/imageActions';
import { Container, Paper } from '@material-ui/core';
import ImageUploadInput from './global/ImageUploadInput';
import UploadButton from './global/UploadButton';
import UploadSnackbar from './global/UploadSnackbar';
import UploadSuccessDialog from './global/UploadSuccessDialog';

type ImageFormProps = {};

const ImageForm: React.FC<ImageFormProps> = () => {
  const dispatch = useDispatch();

  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setError('Please choose a file.');
      setOpen(true);
      return;
    }
    try {
      await dispatch(uploadImage(file));
      setFile(null);
      setError(null);
      setSuccess(true);
      setOpen(true);
      dispatch(getImages());
    } catch (error : any) {
      setError(error.message);
      setOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setOpen(false);
  };

  const handleDialogClose = () => {
    setSuccess(false);
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: 16 }}>
        <ImageUploadInput file={file} setFile={setFile} />
        <UploadButton handleSubmit={handleSubmit} />
        <UploadSnackbar open={open} error={error} success={success} handleSnackbarClose={handleSnackbarClose} />
        <UploadSuccessDialog open={success} handleDialogClose={handleDialogClose} />
      </Paper>
    </Container>
  );
};

export default ImageForm;