import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";

type ImageListProps = {
  images: [];
};

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#fff",
  },
}));

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {images.map((image, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar src={`http://0.0.0.0:3001/uploads/${image}`} />
            </ListItemAvatar>
            <ListItemText primary={`${image}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ImageList;
