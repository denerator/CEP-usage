import * as React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export const LayerItem = ({ layer }) => {
  const deleteLayerHandler = () => {
    console.log('remove layer')
  };
  return (
    <ListItem>
      <ListItemText primary={layer} secondary="ArtLayer" />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="Delete">
          <DeleteIcon onClick={deleteLayerHandler} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
