import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropertyMenu from './propertyMenuForm';
import { getComponentsToRender, getSelectedComponent } from '../editorGUI.selectors';
import { getCurrentTab, getViews } from '../../nav/nav.selectors';
import { updateComponent, selectComponent } from '../editorGUI.actions';
import { func, object } from 'prop-types';
import { Box } from '@material-ui/core'
import ViewPropertyMenuContainer from './viewPropertyMenu.container';

class PropertyMenuContainer extends Component {  
  handleUpdateComponents = (value) => {
    const { components, updateComponent, component } = this.props
    const componentPositions = components.reduce((edited_components, comp) => {
      if(comp.id === component.id) {
        comp.widget[Object.keys(value)[0]] = Object.values(value)[0];
      }
      edited_components.push(comp);
      return edited_components;
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
    const { component, views, currentTab } = this.props;
    const viewsFiltered = views.filter(view => view.id !== currentTab.id)
    if (component.id)
      return (
        <Box className="prop-menu">
          <PropertyMenu 
            handleUpdateComponents={this.handleUpdateComponents}
            deleteItem={this.deleteItem}
            component={component}
            views={viewsFiltered.map(v => v.title)}
          />
        </Box>);
    return (
      <Box className="prop-menu">
        <ViewPropertyMenuContainer 
          view={views.filter(v => v.id === currentTab.id)[0]}
        />
      </Box>);
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