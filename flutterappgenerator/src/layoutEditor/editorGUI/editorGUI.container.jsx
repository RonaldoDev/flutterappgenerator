import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Container, Box } from '@material-ui/core';
import EditorGUI from './editorGUI'

class EditorGUIContainer extends Component {
    constructor(){
        super();
        this.state = {
            result : 0
        }
    }

    render() {
        return  <EditorGUI />
            
           
      
    }
}

export default EditorGUIContainer;