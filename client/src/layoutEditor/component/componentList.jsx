import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { func, arrayOf, string } from 'prop-types';



class ComponentList extends Component {
    constructor(){
        super();
        this.handleAddComponent = this.handleAddComponent.bind(this)
    }
    handleAddComponent(event) {
      const { addComponent } = this.props
      addComponent(event.target.textContent);
    }
    renderListItems(item, index) {
      return (
        <ListItem key={`${item}${index}`} button onClick={this.handleAddComponent}>
          <ListItemText primary={item}/>
        </ListItem>
      );
    }
    render() {
      const { components } = this.props;
      return (
        <Container maxWidth="sm">
          <List component="nav">
            {components.map((item, index) => this.renderListItems(item, index))}
          </List>
          
        </Container>
      );
    }
}

ComponentList.propTypes = {
  components: arrayOf(string),
  addComponent: func
}
export default ComponentList;
