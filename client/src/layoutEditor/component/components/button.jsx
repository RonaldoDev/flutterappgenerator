import React from 'react';
import { func, object } from 'prop-types';
import { Button } from '@material-ui/core';

export default function RenderButton(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { color, text } = widget;
        return (
          <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
            <Button color={color} style={{width:'100%'}} variant="contained">
              {text}
            </Button>
          </div>);
} 

RenderButton.propTypes = {
  item: object,
  selectItem: func.isRequired,
}

RenderButton.defaultProps = {
  cssClass: ''
}

