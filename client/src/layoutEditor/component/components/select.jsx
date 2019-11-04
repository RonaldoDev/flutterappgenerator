import React from 'react';
import { func, object } from 'prop-types';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

export default function RenderSelect(props) {
  const { item, selectItem } = props
  const { widget, id, selected } = item;
  const { text, items } = widget;
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
                      {items.map((elem) => <MenuItem value={elem.key}>{elem.label}</MenuItem>)}
                        
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

