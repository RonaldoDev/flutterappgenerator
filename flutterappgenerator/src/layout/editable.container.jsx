import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Container, Box } from '@material-ui/core';
import Editable from './editable'

class EditableContainer extends Component {
    constructor(){
        super();
        this.state = {
            result : 0
        }
    }

    render() {
        return  <Editable />
            
           
      
    }
}

export default EditableContainer;