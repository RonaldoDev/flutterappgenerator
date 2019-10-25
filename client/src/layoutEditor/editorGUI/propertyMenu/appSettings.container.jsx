import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTheme } from '../editorGUI.actions';
import AppSettings from './appSettings';


class AppSettingsContainer extends Component {
    constructor() {
        super();
        this.saveView = this.saveView.bind(this);
    }
    saveView = (param) => {
       this.props.changeTheme(param)
      }
    render(){
        return (<AppSettings save={this.saveView} />)
    }
}

  
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeTheme }, dispatch);

export default connect(null, mapDispatchToProps)(AppSettingsContainer);