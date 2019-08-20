import React, { Component } from 'react';
import { Container, TextField, Button, Checkbox, Select, AppBar, MenuItem } from '@material-ui/core';
import ReactGridLayout from 'react-grid-layout';
import "react-grid-layout/css/styles.css";
import './style.css';
import { arrayOf, func, number, object, string } from 'prop-types';



class EditorGUI extends Component {
  constructor(){
    super();
    this.onLayoutChange = this.onLayoutChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
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
  deleteItem = (id) => {
    const { components, updateComponent } = this.props
    const componentPositions = components.reduce((componentList, component) => {
      
      if (component.id !== id) {
        componentList.push({...component});
      }
    
      return componentList;
    }, []);
    updateComponent(componentPositions);
  }
  renderItems(item) {
    switch(item.type) {
      case 'button':
        return (
          <div key={item.id}>
            <Button disabled style={{width:'100%'}} variant="contained">
              Default
            </Button>
            <div>
              <span className="settings-tooltip" onClick={() => {}}></span>
              <span className="delete-tooltip" onClick={() => this.deleteItem(item.id)}></span>
            </div>
          </div>);
      case 'text':
        return (
          <div key={item.id}>
            <TextField disabled style={{width:'100%'}}
              id="standard-name"
              label="TextField"
            />
            <div style={{width:'100%'}}>
              <span className="settings-tooltip" onClick={() => {}}></span>
              <span className="delete-tooltip" onClick={() => this.deleteItem(item.id)}></span>
            </div>
          </div>);
      case 'check':
        return (
          <div key={item.id}>
            <Checkbox
              disabled
              value="checkedA"
              inputProps={{
                'aria-label': 'primary checkbox',
              }}
          />
              <div>
                <span className="settings-tooltip" onClick={() => {}}></span>
                <span className="delete-tooltip" onClick={() => this.deleteItem(item.id)}></span>
              </div>
        </div>);
      case 'appbar':
        return (
          <div key={item.id}>
            <AppBar style={{width:'100%'}} disabled >
              toolbar
              {/* <Toolbar style={{width:'100%'}}>
                <Typography variant="h6" >
                AppBar
                </Typography>
              </Toolbar> */}
            </AppBar>
              <div>
                <span className="settings-tooltip" onClick={() => {}}></span>
                <span className="delete-tooltip" onClick={() => this.deleteItem(item.id)}></span>
              </div>
        </div>);
      case 'select':
        return (
          <div key={item.id}>
            <Select
              disabled
              style={{width:'100%'}}
              inputProps={{
                name: 'AppBar',
                id: 'age-simple',
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <div>
              <span className="settings-tooltip" onClick={() => {}}></span>
              <span className="delete-tooltip" onClick={() => this.deleteItem(item.id)}></span>
            </div>
         </div>);
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
  className: string,
  items: number,
  rowHeight: number,
  onLayoutChange: func,
  cols: number
}

export default EditorGUI;