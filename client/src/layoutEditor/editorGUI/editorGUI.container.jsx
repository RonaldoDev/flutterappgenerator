import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateComponent, selectComponent } from './editorGUI.actions';
import EditorGUI from './editorGUI';
import PropertyMenuContainer from './propertyMenu/propertyMenu.container';
import { getComponentsToRender } from './editorGUI.selectors';
import { arrayOf, func, object } from 'prop-types';

class EditorGUIContainer extends Component {
  constructor() {
    super();
    this.handleUpdateComponents = this.handleUpdateComponents.bind(this);
    this.handleSelectComponent = this.handleSelectComponent.bind(this);
  }
  handleUpdateComponents = (components) => {
    const { updateComponent } = this.props;
    updateComponent(components);
  }

  handleSelectComponent = (component) => {
    const { selectComponent } = this.props;
    selectComponent(component);
  }

  render() {
    const { componentList } = this.props;
    return (
      <Grid container spacing={0}>

        <Grid item md={6}>
          <div style={{ border: "2px solid pink" }}>
            <EditorGUI
              components={componentList}
              updateComponent={this.handleUpdateComponents}
              selectComponent={this.handleSelectComponent} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ border: "2px solid green" }}><PropertyMenuContainer /></div>

        </Grid>
      </Grid>);
  }
}

EditorGUIContainer.propTypes = {
  componentList: arrayOf(object),
  updateComponent: func.isRequired,
  selectComponent: func.isRequired
}

const mapStateToPros = state => {
  const componentList = getComponentsToRender(state);
  return { componentList };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateComponent, selectComponent }, dispatch);


export default connect(mapStateToPros, mapDispatchToProps)(EditorGUIContainer);