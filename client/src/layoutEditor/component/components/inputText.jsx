import React from 'react';
import { func, object } from 'prop-types';
import { TextField } from '@material-ui/core';

export default function RenderTextField(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { color, text } = widget;
  return (
    <div key={item.id} onClick={() => selectItem(id)} className={selected ? " selected" : ""}>
      <TextField
        style={{ width: '100%' }}
        id={item.id}
        label={text}
      />
    </div>);
}

RenderTextField.propTypes = {
  item: object,
  selectItem: func.isRequired,
}

RenderTextField.defaultProps = {
  cssClass: ''
}

