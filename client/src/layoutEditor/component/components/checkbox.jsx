import React from 'react';
import { func, object } from 'prop-types';
import { Checkbox, FormControlLabel } from '@material-ui/core';

export default function RenderCheckbox(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { color, text } = widget;
  return (
    <div key={item.id} >
      <FormControlLabel
      style={{ width: '100%', left: 0}}
        id="form-label"
        onClick={() => selectItem(id)}
        className={selected ? " selected" : ""}
        control={
          <Checkbox
            value="checkedA"
            color={color}
            inputProps={{
              'aria-label': 'primary checkbox',
            }}
          />
        }
        label={text}
      />
    </div>);
}

RenderCheckbox.propTypes = {
  item: object,
  selectItem: func.isRequired,
}

RenderCheckbox.defaultProps = {
  cssClass: ''
}

