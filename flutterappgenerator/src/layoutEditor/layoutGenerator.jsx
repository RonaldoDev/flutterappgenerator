import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import { Grid, Box } from '@material-ui/core';
import ActionMenuContainer from './nav/actionMenu.container'
import ComponentListContainer from './component/componentList.container'
import EditableContainer from './editorGUI/editorGUI.container'
import { makeStyles } from '@material-ui/core/styles';


class LayoutGenerator extends Component {
    constructor(){
        super();
        this.state = {
            result : 0
        }
    }
    
    render() {

        return (
        <Grid container style={{flexGrow: 1}} spacing={10}>
            <Grid item xs={3}>
                <Grid container justify="center" spacing={5}>
                <ComponentListContainer />
                </Grid>
            </Grid>
            <Grid item> <EditableContainer /></Grid>
            </Grid>)
    }
}
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        counter: state.counter
    }
    }
const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(LayoutGenerator);