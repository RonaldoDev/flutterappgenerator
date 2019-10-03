import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getComponentList } from '../../reducers/selectors';
import { addComponent } from './components.actions';    
import ComponentList from './componentList';
import { arrayOf, func, string } from 'prop-types';
import getComponent, { widget } from './components/components';

class ComponentListContainer extends Component {
    handleAddComponent = (componentType) => {
        const component = getComponent(componentType);
        const comp = { 
            layoutItem : component,
            id: component.i,
            type: componentType,
            selected: false, 
            widget: widget(component.i, componentType)
        };
        this.props.addComponent(comp);
    };
    render(){
        const { componentList } = this.props;
        return (<ComponentList components={componentList} addComponent={this.handleAddComponent} />)
    }
}

ComponentListContainer.propTypes = {
    componentList: arrayOf(string),
    addComponent: func
}

const mapStateToPros = state => {
    const componentList = getComponentList(state);
    return { componentList };
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ addComponent }, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(ComponentListContainer);