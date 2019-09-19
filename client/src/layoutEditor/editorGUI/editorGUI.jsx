import React, { Component } from 'react';
import { Container, TextField, Button, Checkbox, Select, AppBar, MenuItem } from '@material-ui/core';
import ReactGridLayout from 'react-grid-layout';
import "react-grid-layout/css/styles.css";
import './style.css';
import { arrayOf, func, number, object, string } from 'prop-types';
import renderButton from '../component/components/button';
import renderCheckbox from '../component/components/checkbox';
import renderTextField from '../component/components/inputText';
import renderAppBar from '../component/components/appbar';
import renderSelect from '../component/components/select';


class EditorGUI extends Component {
  constructor(){
    super();
    this.state = {
      selected: false,
      text: "default",
      cssClass: " selected",
      color: "primary"
    }
    this.onLayoutChange = this.onLayoutChange.bind(this)
}
  onLayoutChange = (layout) => {
    const { components, updateComponent } = this.props
    const componentPositions = components.reduce((layouts, component) => {
      layout.forEach(item => {
        if (component.id === item.i) {
          layouts.push({...component, component: item});
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
        selectComponent(comp.componente);
      }
      else
        comp.selected = false;
     });
     this.setState({ isSelected: true })
  }
  renderItems(item) {
    switch(item.type) {
      case 'button':
        return renderButton({ item, selectItem: this.selectItem });
      case 'text':
        return renderTextField({ item, selectItem: this.selectItem });
      case 'check':
        return renderCheckbox({ item, selectItem: this.selectItem });
      case 'appbar':
        return renderAppBar({ item, selectItem: this.selectItem });
      case 'select':
        return renderSelect({ item, selectItem: this.selectItem });
      default:
        return null;
    }
  };
    render() {
        const { components } = this.props;
        const layout = components.map(item => item.component);
          return (
            <Container maxWidth="lg">
            <div className="phone">
             <div className="screen">        
                <ReactGridLayout cols={4}
                            onLayoutChange={this.onLayoutChange}
                            rowHeight={40}
                            width={300}
                            static={false}
                            isDraggable={true}
                            useCSSTransforms
                            compactType={null}
                            preventCollision={true}
                            isResizable={true}
                            className="layout" maxRows={20} layout={layout} >
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