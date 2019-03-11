import React from "react";
import { connect } from "react-redux";
import { TextField, Paper, Button, Grid } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";

import { addUhluItem } from "./actions/UhluListActions";

const validate = values => {
    const errors = {}
    if (!values.item) {
      errors.item = 'Required'
    } else if (values.item.length > 140) {
      errors.item = 'Must be 140 characters or less'
    } else if (values.item.trim().length < 1) {
        errors.item = 'Can not be only whitespaces'
      }
    return errors
  }

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

class AddUhluItem extends React.Component {
  submitAddItem(data) {
    const { reset, addItem } = this.props;

    addItem(data);
    reset();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Paper style={{ margin: 16, padding: 16 }}>
        <form onSubmit={handleSubmit(this.submitAddItem.bind(this))}>
          <Grid container>
            <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
              <Field
                name="item"
                component={renderTextField}
                label="Add item"
                placeholder="Add Uhlu Item here"
                fullWidth
              />
            </Grid>
            <Grid xs={2} md={1} item>
              <Button
                fullWidth
                color="secondary"
                variant="outlined"
                type="submit"
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addUhluItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "UhluForm", 
    validate,
  })(AddUhluItem)
);
