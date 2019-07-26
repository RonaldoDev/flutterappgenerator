import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Container, Box } from '@material-ui/core';
import ActionMenuContainer from './actionMenu.container'
import ComponentListContainer from './componentList.container'
import EditableContainer from './editable.container'

class LayoutGenerator extends Component {
    constructor(){
        super();
        this.state = {
            result : 0
        }
    }

    render() {
        return (<div>
            {/* <ActionMenuContainer />
            <ComponentListContainer /> */}
            <EditableContainer />
        </div>)
    }
}

export default LayoutGenerator;