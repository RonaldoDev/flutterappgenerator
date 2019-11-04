import React from 'react';
import { Icon, Typography } from '@material-ui/core';

export default function RenderResource(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { icon } = widget;
  return (
    <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
      <Icon fontSize="large" color="primary">
        {item.type}
      </Icon>
      <Typography color="primary">{`${item.type} component`}</Typography>
    </div>);
}


