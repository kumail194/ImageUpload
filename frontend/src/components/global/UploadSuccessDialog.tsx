import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

interface UploadSuccessDialogProps {
  open: boolean;
  handleDialogClose: () => void;
}

const UploadSuccessDialog: React.FC<UploadSuccessDialogProps> = ({ open, handleDialogClose }) => {
  return (
    <Dialog open={open} onClose={handleDialogClose}>
      <DialogTitle>Upload Successful</DialogTitle>
      <DialogContent>
        <p>Your file has been uploaded successfully.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadSuccessDialog;