import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getViews } from './nav.selectors';
import { arrayOf, object } from 'prop-types';
// import { save } from './nav.actions';    
import ActionMenu from './actionMenu';
import firebase from '../../firebase';


class ActionMenuContainer extends Component {
    constructor(){
        super();
        this.handleGenerateSource = this.handleGenerateSource.bind(this);
        this.handleSave = this.handleSave.bind(this);   
    }
    handleGenerateSource = () => {
        const { views } = this.props;
        fetch('v1/generate', {
            method: 'post',
            headers: new Headers({
              'Content-Type': 'application/json'
              }),
            body: JSON.stringify(views)}).then(response => {
                response.blob().then(blob => {
					const url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
                    // TODO: Correct name from server
                    a.download = 'app.apk';
					a.click();
                });
            }).catch(err => console.log(err));
    };
    handleSave = (user) => {
        const { views } = this.props;
        
        firebase.database().ref('template/' + user.uid).set({
            username: user.email,
            views: JSON.stringify(views)
          });
    }
    render(){
        return (<div>
            <ActionMenu generateCode={this.handleGenerateSource} save={this.handleSave} />
            
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