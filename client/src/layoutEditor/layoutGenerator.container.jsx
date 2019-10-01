import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchViews } from '../reducers/action';
import LayoutGenerator from './layoutGenerator';


class LayoutGeneratorContainer extends Component {
    componentWillMount() {
        const { user } = this.props;
        this.props.fetchViews(user.uid);
      }
    render(){
        return (<LayoutGenerator />)
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ fetchViews }, dispatch);

export default connect(null, mapDispatchToProps)(LayoutGeneratorContainer);