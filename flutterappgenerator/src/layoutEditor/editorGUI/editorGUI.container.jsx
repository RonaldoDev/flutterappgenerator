import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateComponent } from './editorGUI.actions';
import EditorGUI from './editorGUI';
import { getComponentsToRender } from './editorGUI.selectors';
import { arrayOf, func, object } from 'prop-types';

class EditorGUIContainer extends Component {
    handleUpdateComponents = (components) => {
        this.props.updateComponent(components);
    }

    render() {
        const { componentList } = this.props;
        return  <EditorGUI components={componentList} updateComponent={this.handleUpdateComponents} />    
    }
}

EditorGUIContainer.propTypes = {
    componentList: arrayOf(object),
    updateComponent: func.isRequired
}

const mapStateToPros = state => {
    const componentList = getComponentsToRender(state);
    return { componentList };
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ updateComponent }, dispatch);


export default connect(mapStateToPros, mapDispatchToProps)(EditorGUIContainer);