import React from 'react';
import { Button, Icon } from '@material-ui/core';

export default function RenderIconButton(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { icon, color, theme, text } = widget;
  switch (theme) {
    case "custom":
      return (
        <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
          <Button
            fullWidth
            endIcon={<Icon style={{ color: color, fontSize: 30 }}>
              {icon}
            </Icon>}
          >
            {text}
          </Button>

        </div>);
    default:
      return (
        <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
          <Button
            fullWidth
            endIcon={<Icon style={{fontSize: 30}} color={theme}>
              {icon}
            </Icon>}
          >
            {text}
          </Button>

        </div>);
  }
}


