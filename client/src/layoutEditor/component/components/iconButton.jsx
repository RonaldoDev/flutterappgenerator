import React from 'react';
import { Icon } from '@material-ui/core';

export default function RenderIconButton(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { icon, color, theme } = widget;
  switch(theme) {
    case "custom":
      return (
          <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
            <Icon fontSize="large" style={{color: color}}>
                {icon}
            </Icon>
          </div>);
    default:
        return (
          <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
            <Icon fontSize="large" color={theme}>
                {icon}
            </Icon>
          </div>);
  }
} 


