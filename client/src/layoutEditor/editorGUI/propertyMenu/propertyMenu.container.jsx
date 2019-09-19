import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropertyMenuForm from './propertyMenuForm';
import { getComponentsToRender, getSelectedComponent } from '../editorGUI.selectors';
import { updateComponent, selectComponent } from '../editorGUI.actions';
import { arrayOf, func, object } from 'prop-types';
import {

  Box,

} from '@material-ui/core'

class PropertyMenuContainer extends Component {
  handleUpdateComponents = (values) => {
    // console.log(values)
    // this.props.updateComponent(values);
    const { components, updateComponent, component } = this.props
    const componentPositions = components.reduce((som, comp) => {
      if(comp.id === component.id) {
        comp.componente.text = values.text;
        comp.componente.color = values.color;
      }
      som.push(comp);
      return som;
    }, []);
    updateComponent(componentPositions)
  }
  deleteItem = () => {
    const { components, updateComponent, component, selectComponent } = this.props
    const componentPositions = components.reduce((componentList, comp) => {
      
      if (component.id !== comp.id) {
        componentList.push(comp);
      }
    
      return componentList;
    }, []);
    updateComponent(componentPositions);
    selectComponent({});
  }
  render() {
    const { component } = this.props;
    const initial = { text: component.text, color: component.color  }
    if (component.color)
      return (
        <Box className="prop-menu">
          <PropertyMenuForm initialValues={initial}
            onSubmit={this.handleUpdateComponents}
            deleteItem={this.deleteItem}
          />
        </Box>);
    return null;
  }
}

PropertyMenuContainer.propTypes = {
  component: object,
  updateComponent: func.isRequired
}

const mapStateToPros = state => {
  const component = getSelectedComponent(state);
  const components = getComponentsToRender(state);
  return { component, components };
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ updateComponent, selectComponent }, dispatch);


export default connect(mapStateToPros, mapDispatchToProps)(PropertyMenuContainer);