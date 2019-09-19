import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
// import MenuItem from 'material-ui/MenuItem'
// import { RadioButton } from 'material-ui/RadioButton'
import {
  MenuItem,
  Select,
  TextField,

} from '@material-ui/core'

class PropertyMenuForm extends Component {
  onChangeSubmit = (onChange, handleSubmit) => {
    let timerIdle;
    return e => {
        onChange(e);
  
        clearTimeout(timerIdle);
        timerIdle = setTimeout(() => {
           handleSubmit();
       }, 800);
     }
  };
  renderSelect = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <Select
      style={{width:'100%'}}
      {...input}
      {...custom}
    >
      <MenuItem value='default'>Default</MenuItem>
      <MenuItem value="primary">Primary</MenuItem>
      <MenuItem value="secondary">Secondary</MenuItem>
    </Select>
  )
  renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
    
    {...input}
    {...custom}
    />
  )
  render() {
    const { handleSubmit, pristine, reset, submitting, deleteItem } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="text"
          // onChange={(e) => this.onChangeSubmit(e, handleSubmit)}
          // handleSubmit={handleSubmit}
          component={this.renderTextField}
          label="name" />
        <Field name="color"
          component={this.renderSelect}
          label="name" />
        <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        <button type="button"onClick={deleteItem}>
          Delte
        </button>
      </div>
      </form>
    )
  }
}

// Decorate with redux-form
PropertyMenuForm = reduxForm({
  form: 'PropertyMenu',
})(PropertyMenuForm)

export default PropertyMenuForm