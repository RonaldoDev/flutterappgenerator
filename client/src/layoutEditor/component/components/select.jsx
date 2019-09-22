import React from 'react';
import { func, object } from 'prop-types';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

export default function RenderSelect(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { color, text } = widget;
        return (
          <div key={id} className={selected ? " selected" : ""} onClick={() => selectItem(id)}>
             <FormControl style={{width:'100%'}} >
                <InputLabel htmlFor={id}>{text}</InputLabel>
                    <Select
                        style={{width:'100%'}}
                        inputProps={{
                        name: text,
                        id: id,
                        }}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
          </div>);
} 
RenderSelect.propTypes = {
  item: object,
  selectItem: func.isRequired,
}

RenderSelect.defaultProps = {
  cssClass: ''
}

