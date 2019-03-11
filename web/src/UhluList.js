import React from "react";
import { List, Paper } from "@material-ui/core";
import { connect } from "react-redux";

import UhluListItem from "./UhluListItem";
import AddUhluItem from "./AddUhluItem";
import { addUhluItem, removeUhluItem } from "./actions/UhluListActions";

class UhluList extends React.Component {
  onAddItem(value) {
    this.props.addItem(value);
  }

  render() {
    return (
      <>
        <AddUhluItem onSubmit={value => this.onAddItem(value)} />
        {this.props.items.length > 0 && (
          <Paper style={{ margin: 16 }}>
            <List>
              {this.props.items.map((item, idx) => (
                <UhluListItem
                  {...item}
                  key={`UhluItem.${idx}`}
                  itemId={idx}
                  divider={idx !== this.props.items.length - 1}
                  onButtonClick={idx => {
                    this.props.removeItem(idx);
                  }}
                />
              ))}
            </List>
          </Paper>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addUhluItem(item)),
  removeItem: item => dispatch(removeUhluItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UhluList);
