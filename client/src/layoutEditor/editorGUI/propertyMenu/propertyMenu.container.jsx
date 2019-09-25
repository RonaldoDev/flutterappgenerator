import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropertyMenu from './propertyMenuForm';
import { getComponentsToRender, getSelectedComponent } from '../editorGUI.selectors';
import { getCurrentTab, getViews } from '../../nav/nav.selectors';
import { updateComponent, selectComponent } from '../editorGUI.actions';
import { arrayOf, func, object } from 'prop-types';
import {

  Box,

} from '@material-ui/core'

class PropertyMenuContainer extends Component {
  handleUpdateComponents = (value) => {
    // console.log(values)
    // this.props.updateComponent(values);
    debugger;
    const { components, updateComponent, component } = this.props
    const componentPositions = components.reduce((som, comp) => {
      if(comp.id === component.id) {
        if ('text' in value)
          comp.widget.text = value.text;
        if ('color' in value)
          comp.widget.color = value.color;
        if ('action' in value)
          comp.widget.action = value.action;
      }
      som.push(comp);
      return som;
    }, []);
    debugger;
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
    const { component, views, currentTab } = this.props;
    const initial = { text: component.text, color: component.color  }
    const viewsFiltered = views.filter(view => view.title != currentTab.title)
    if (component.color)
      return (
        <Box className="prop-menu">
          <PropertyMenu 
            handleUpdateComponents={this.handleUpdateComponents}
            deleteItem={this.deleteItem}
            component={component}
            views={viewsFiltered.map(v => v.title)}
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
  const views = getViews(state);
  const currentTab = getCurrentTab(state);
  return { component, components, views, currentTab };
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ updateComponent, selectComponent }, dispatch);


export default connect(mapStateToPros, mapDispatchToProps)(PropertyMenuContainer);