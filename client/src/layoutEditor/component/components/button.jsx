import React from 'react';
import { Button } from '@material-ui/core';

export default function RenderButton(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { color, text, textColor, fontSize } = widget;
  let backgroundColor = color === "primary" ?  null : color
  let componentColor = color === "primary" ?  "primary" : "inherit"
  return (
          <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
            <Button 
              fullWidth 
              style={{ 
                backgroundColor,
                color: textColor,
                fontSize : fontSize,
                height: "100%"
              }}
              color={componentColor}
              className="protect" 
              variant="contained">
              {text}
            </Button>
          </div>);
} 


