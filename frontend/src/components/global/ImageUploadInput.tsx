import React from 'react';
import { Grid, Button } from '@material-ui/core';

type ImageUploadInputProps = {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
};

const ImageUploadInput: React.FC<ImageUploadInputProps> = ({ file, setFile }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          style={{ display: 'none' }}
          id="image-upload"
        />
        <label htmlFor="image-upload">
          <Button variant="contained" color="primary" component="span">
            Choose File
          </Button>
        </label>
      </Grid>
    </Grid>
  );
};

export default ImageUploadInput;