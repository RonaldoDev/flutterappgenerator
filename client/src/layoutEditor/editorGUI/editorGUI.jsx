import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import ReactGridLayout from 'react-grid-layout';
import "react-grid-layout/css/styles.css";
import './style.css';
import { arrayOf, func, number, object, string } from 'prop-types';
import renderButton from '../component/components/button';
import renderCheckbox from '../component/components/checkbox';
import renderTextField from '../component/components/inputText';
import renderText from '../component/components/text';
import renderSelect from '../component/components/select';
import renderIconButton from '../component/components/iconButton';
import renderResource from '../component/components/resource';


class EditorGUI extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      isLoading: false,
      todos: {}
    }
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }
  onLayoutChange = (layout) => {
    const { components, updateComponent } = this.props
    const componentPositions = components.reduce((layouts, component) => {
      layout.forEach(item => {
        if (component.id === item.i) {
          layouts.push({ ...component, layoutItem: item });
        }
      })
      return layouts;
    }, []);
    updateComponent(componentPositions)
  };

  selectItem = (id) => {
    const { components, selectComponent } = this.props;

    components.forEach(comp => {
      if (comp.id === id) {
        comp.selected = true;
        selectComponent(comp.widget);
      }
      else
        comp.selected = false;
    });
    this.setState({ isSelected: true })
  }
  renderItems(item) {

    switch (item.type) {
      case 'button':
        return renderButton({ item, selectItem: this.selectItem });
      case 'iconButton':
        return renderIconButton({ item, selectItem: this.selectItem });
      case 'textField':
        return renderTextField({ item, selectItem: this.selectItem });
      case 'checkBox':
        return renderCheckbox({ item, selectItem: this.selectItem });
      case 'text':
        return renderText({ item, selectItem: this.selectItem });
      case 'select':
        return renderSelect({ item, selectItem: this.selectItem });
      default:
        return renderResource({ item, selectItem: this.selectItem });
    }
  };
  render() {

    const { components, name } = this.props;
    const layout = components.map(item => item.layoutItem);
    return (
      <Container maxWidth="lg">
        <div className="phone">
          <div className="screen">

            <AppBar color="primary" position="static">
              <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                  {name}
                </Typography>

              </Toolbar>
            </AppBar>
            <ReactGridLayout cols={4}
              onLayoutChange={this.onLayoutChange}
              rowHeight={45}
              width={340}
              static={false}
              isDraggable={true}
              useCSSTransforms
              compactType={null}
              preventCollision={true}
              isResizable={true}
              className="layout" maxRows={9} layout={layout} >
              {components.map(item => this.renderItems(item))}
            </ReactGridLayout>
          </div>
        </div>
      </Container>
    )
  }
}

EditorGUI.defaultProps = {
  components: [],
  className: "layout",
  items: 20,
  rowHeight: 30,
  onLayoutChange: func,
  cols: 4
}
EditorGUI.propTypes = {
  components: arrayOf(object),
  updateComponent: func.isRequired,
  selectComponent: func.isRequired,
  className: string,
  items: number,
  rowHeight: number,
  onLayoutChange: func,
  cols: number
}

export default EditorGUI;