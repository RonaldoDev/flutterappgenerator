import React from 'react';
import { func, object } from 'prop-types';
import {  Typography } from '@material-ui/core';

export default function RenderText(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { textColor, text, theme } = widget;
  switch(theme) {
    case "custom":
    debugger;    
    return (
            <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
              <Typography style={{width:'100%', color: textColor}} variant="contained">
                {text}
              </Typography>
            </div>);
    default:
        return (
          <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
            <Typography color={theme} style={{width:'100%'}} variant="contained">
              {text}
            </Typography>
          </div>);
  }      
  

} 

RenderText.propTypes = {
  item: object,
  selectItem: func.isRequired,
}

RenderText.defaultProps = {
  cssClass: ''
}

