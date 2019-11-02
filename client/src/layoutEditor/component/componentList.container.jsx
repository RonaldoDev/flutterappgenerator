import { arrayOf, func, number, string } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getComponentList, getTheme } from '../../reducers/selectors';
import { getPositionsToRenders } from '../editorGUI/editorGUI.selectors';
import { getLastId } from '../nav/nav.selectors';
import ComponentList from './componentList';
import { addComponent } from './components.actions';
import getComponent, { widget } from './components/components';

class ComponentListContainer extends Component {
    handleAddComponent = (componentType) => {
        const { lastId, positionsToRender  } = this.props;
        const icon = componentType === "camera" ? "camera_alt" : componentType === "map" ? "map" : "http"
        const component = getComponent(lastId, componentType, positionsToRender[0]);
        const comp = { 
            layoutItem : component,
            id: component.i,
            type: componentType,
            selected: false, 
            widget: widget(component.i, componentType, "add")
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
    addComponent: func,
    lastId: number
}

const mapStateToPros = state => {
    const positionsToRender = getPositionsToRenders(state);
    const componentList = getComponentList(state);
    const compId = getLastId(state);
    const theme = getTheme(state);

    return { positionsToRender, componentList, lastId: compId, theme };
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ addComponent }, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(ComponentListContainer);