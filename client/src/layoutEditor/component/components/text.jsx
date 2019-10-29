import React from 'react';
import { func, object } from 'prop-types';
import { Button, Typography } from '@material-ui/core';

export default function RenderText(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { color, text } = widget;
        return (
          <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
            <Typography style={{width:'100%', color: "#000"}} variant="contained">
              {text}
            </Typography>
          </div>);
} 

RenderText.propTypes = {
  item: object,
  selectItem: func.isRequired,
}

RenderText.defaultProps = {
  cssClass: ''
}

