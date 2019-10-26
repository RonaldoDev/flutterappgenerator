import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getViews } from '../../selectors/view';
import { getLastId } from './nav.selectors';
import { arrayOf, object } from 'prop-types';
// import { save } from './nav.actions';    
import ActionMenu from './actionMenu';
import firebase from '../../config/firebase';
import { getTheme } from '../../reducers/selectors';


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
        const { compId, views, theme } = this.props;
        
        firebase.database().ref('template/' + user.uid).set({
            username: user.email,
            views: JSON.stringify(views),
            compId: compId,
            theme: theme
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
    const compId = getLastId(state);
    const theme = getTheme(state);
    return { views, compId, theme };
}

// const mapDispatchToProps = dispatch => 
//     bindActionCreators({ save }, dispatch);

export default connect(mapStateToPros, null)(ActionMenuContainer);