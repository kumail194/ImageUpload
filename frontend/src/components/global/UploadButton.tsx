import React from "react";
import { Grid, Button } from "@material-ui/core";

type UploadButtonProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const UploadButton: React.FC<UploadButtonProps> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Upload
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UploadButton;