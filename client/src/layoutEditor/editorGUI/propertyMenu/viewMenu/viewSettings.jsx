import React, { Component } from 'react';
import {
    Box,
    TextField,  
} from '@material-ui/core'

class ViewSettings extends Component {
    constructor(){
        super();
        this.handleSave = this.handleSave.bind(this);
    }
    handleSave(value) {
        const newView = { ...this.props.view, title: value} 
        this.props.save(newView);
    }
    render(){
        const { view } = this.props;
        return (<Box style={{height: "500px"}}>
            <TextField label="File name" fullWidth value={view.title} onChange={evt => this.handleSave(evt.target.value)} />
            <TextField label="View name" fullWidth value={view.title} onChange={evt => this.handleSave(evt.target.value)} />
            </Box>)
    }
}

export default ViewSettings