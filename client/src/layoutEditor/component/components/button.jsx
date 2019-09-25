import React from 'react';
import { func, object } from 'prop-types';
import { Button } from '@material-ui/core';

export default function RenderButton(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { color, text } = widget;
        return (
          <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
            <Button style={{width:'100%', backgroundColor: color}} variant="contained">
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

