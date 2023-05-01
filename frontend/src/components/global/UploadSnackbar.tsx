import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

interface UploadSnackbarProps {
  open: boolean;
  error: string | null;
  success: boolean;
  handleSnackbarClose: () => void;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const UploadSnackbar: React.FC<UploadSnackbarProps> = ({ open, error, success, handleSnackbarClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleSnackbarClose}>
      <Alert onClose={handleSnackbarClose} severity={error ? 'error' : 'success'}>
        {error ? error : 'The file was uploaded successfully.'}
      </Alert>
    </Snackbar>
  );
};

export default UploadSnackbar;