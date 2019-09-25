import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getViews } from './nav.selectors';
import { arrayOf, object } from 'prop-types';
// import { save } from './nav.actions';    
import ActionMenu from './actionMenu';


class ActionMenuContainer extends Component {
    constructor(){
        super();
        this.handleGenerateSource = this.handleGenerateSource.bind(this);
    }
    handleGenerateSource = () => {
        debugger;
        const { views } = this.props;
        fetch('v1/generate', {
            method: 'post',
            headers: new Headers({
              'Content-Type': 'application/json'
              }),
            body: JSON.stringify(views)});
    };
    render(){
        return (<div>
            <ActionMenu generateCode={this.handleGenerateSource} />
            
            </div>)

    }
}

ActionMenuContainer.propTypes = {
    views: arrayOf(object),
    // save: func
}

const mapStateToPros = state => {
    const views = getViews(state);
    return { views };
}

// const mapDispatchToProps = dispatch => 
//     bindActionCreators({ save }, dispatch);

export default connect(mapStateToPros, null)(ActionMenuContainer);