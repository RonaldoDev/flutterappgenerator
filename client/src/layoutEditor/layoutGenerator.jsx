import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionMenuContainer from './nav/actionMenu.container'
import ComponentListContainer from './component/componentList.container';
import TabControlContianer from './nav/tabControl.container'

class LayoutGenerator extends Component {
    constructor(){
        super();
        this.state = {
            result : 0
        }
    }
    
    render() {

        return (
        <Grid container style={{flexGrow: 1}} spacing={0}>
            <Grid style={{ backgroundColor: "#FFFFFF" }}item xs={3}> <div><ActionMenuContainer /><ComponentListContainer /></div></Grid>
            {/* <Grid item xs={3}>
                <Grid container justify="center" spacing={0}>
                <ComponentListContainer />
                </Grid>
            </Grid> */}
            <Grid item xs={9}> <TabControlContianer /></Grid>
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