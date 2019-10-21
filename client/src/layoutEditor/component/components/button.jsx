import React from 'react';
import { Button } from '@material-ui/core';

export default function RenderButton(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { color, text, textColor, fontSize } = widget;
        
  return (
          <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
            <Button 
              fullWidth 
              style={{ 
                backgroundColor: color,
                color: textColor,
                fontSize : fontSize,
                height: "100%"
              }} 
              className="protect" 
              variant="contained">
              {text}
            </Button>
          </div>);
} 


