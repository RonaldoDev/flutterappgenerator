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
import { Box, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

class ComponentListContainer extends Component {
  constructor() {
    super();
    this.state = {
      layoutFull: false,
      errorMessage: ""
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleAddComponent = this.handleAddComponent.bind(this);
  }
  handleAddComponent = (componentType) => {
    const { lastId, positionsToRender } = this.props;
    const resources = ["map", "camera", "webview"];
    if (resources.includes(componentType) && positionsToRender.length !== 10) {
      this.setState({ errorMessage: `To insert ${componentType} component, the layout must be clean` });
      this.setState({ layoutFull: true });
    } else if (!positionsToRender.length) {
      this.setState({ errorMessage: "Layout is full" });
      this.setState({ layoutFull: true });
    } else {
      const component = getComponent(lastId, componentType, positionsToRender[0]);
      const comp = {
        layoutItem: component,
        id: component.i,
        type: componentType,
        selected: false,
        widget: widget(component.i, componentType)
      };
      this.props.addComponent(comp);
    }
  };
  handleClose() {
    this.setState({ layoutFull: false });
  }
  render() {
    const { componentList } = this.props;
    return (
      <Box>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.layoutFull}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.errorMessage}</span>}
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

        <ComponentList components={componentList} addComponent={this.handleAddComponent} />
      </Box>)
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