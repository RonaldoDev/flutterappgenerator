import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getViews } from '../../../selectors/view';
import { addView, saveViews } from '../../../storeActions/view';
import Settings from './settings';


class SettingsContainer extends Component {
    render(){
        return (<Settings view={this.props.view} />)
    }
}
const mapStateToPros = state => {
    const views = getViews(state);
    return { views };
  }
  
const mapDispatchToProps = dispatch =>
    bindActionCreators({ addView, saveViews }, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(SettingsContainer);