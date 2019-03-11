import React from "react";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";

class UhluListItem extends React.Component {
  render() {
    return (
      <ListItem divider={this.props.divider}>
        <ListItemText primary={this.props.item} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete Item" onClick={() => this.props.onButtonClick(this.props.itemId)}>
            <DeleteOutlined />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}


export default UhluListItem;
