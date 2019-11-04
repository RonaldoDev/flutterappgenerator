import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropertyMenu from './propertyMenu';
import { getComponentsToRender, getSelectedComponent } from '../editorGUI.selectors';
import { getCurrentTab } from '../../nav/nav.selectors';
import { getViews } from '../../../selectors/view';
import { updateComponent, selectComponent } from '../editorGUI.actions';
import { func, object } from 'prop-types';
import { Box } from '@material-ui/core'
import Settings from './settings.container';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class PropertyMenuContainer extends Component {  
  constructor() {
    super();
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      theme: "primary",
      themeChanged: false
    }
  }
  handleUpdateComponents = (value) => {
    
    const { components, updateComponent, component } = this.props
    if (Object.keys(value)[0] === "theme") {
      this.setState({ theme: Object.values(value)[0] });
      this.setState({ themeChanged: true });
    }
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
  handleClose() {
    this.setState({ themeChanged: false });
  }
  render() {
    const { component, views, currentTab } = this.props;
    const viewsFiltered = views.filter(view => view.id !== currentTab.id)
    if (component.id)
      return (
        <Box className="prop-menu">
            <Snackbar
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}
              open={this.state.themeChanged}
              autoHideDuration={2000}
              onClose={this.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">Component theme changed to {this.state.theme}</span>}
              action={[
                <IconButton
                  key="close"
                  aria-label="close"
                  color="inherit"
                  // className={classes.close}
                  onClick={this.handleClose}
                >
            <CloseIcon />
          </IconButton>,
        ]}
      />
        
          <PropertyMenu 
            handleUpdateComponents={this.handleUpdateComponents}
            deleteItem={this.deleteItem}
            component={component}
            views={viewsFiltered.map(v => v.title)}
          />
        </Box>);
    return (
      <Box className="prop-menu">
        <Settings 
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