import React from 'react';
import { Icon } from '@material-ui/core';

export default function RenderIconButton(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { icon } = widget;
  return (
          <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
            <Icon fontSize="large" color="primary">
                {icon}
            </Icon>
          </div>);
} 


