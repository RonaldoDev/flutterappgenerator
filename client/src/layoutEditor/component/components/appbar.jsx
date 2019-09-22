import React from 'react';
import { func, object } from 'prop-types';
import { AppBar } from '@material-ui/core';

export default function RenderAppBar(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { color, text } = widget;
        return (
            <div key={item.id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
            <AppBar color={color} style={{width:'100%'}} >
              {text}
            </AppBar>
        </div>);
} 

RenderAppBar.propTypes = {
  item: object,
  selectItem: func.isRequired,
}

RenderAppBar.defaultProps = {
  cssClass: ''
}

