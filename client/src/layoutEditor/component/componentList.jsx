import React, { Component } from 'react';
import { func, arrayOf, string } from 'prop-types';
import {
  Box,
  Button,
  Container,
  List,
  ListItem,

} from '@material-ui/core'
import { Edit as EditIcon } from '@material-ui/icons';

class ComponentList extends Component {
  constructor() {
    super();
    this.handleAddComponent = this.handleAddComponent.bind(this)
  }
  handleAddComponent(componentName) {
    const { addComponent } = this.props
    addComponent(componentName);
  }

  renderListItems(item, index) {
    switch (item) {
      case "button":
        return (<ListItem style={{ width: "100%" }} key="1" button onClick={() => this.handleAddComponent("button")}>
          <img src="imgs/button.png" alt="Button" style={{ maxWidth: "100%", height: "auto" }} />
        </ListItem>)

      case "textField":
        return (
          <ListItem style={{ width: "100%" }} key="2" button onClick={() => this.handleAddComponent("button")}>
            <img src="imgs/textField.png" alt="Text Field" style={{ maxWidth: "100%", height: "auto" }} />
          </ListItem>);
      case "checkBox":
        return (
          <ListItem style={{ width: "100%" }} key="3" button onClick={() => this.handleAddComponent(item)}>
            <img src="imgs/checkBox.png" alt="Checkbox"  style={{ maxWidth: "100%", height: "auto" }} />
          </ListItem>);
      case "select":
        return (
          <ListItem style={{ width: "100%" }} key="4" button onClick={() => this.handleAddComponent(item)}>
            <img src="imgs/select.png" alt="Select"  style={{ maxWidth: "100%", height: "auto" }} />
          </ListItem>);

      case "iconButton":
        return (
          <ListItem className="icon-button" style={{ width: "100%" }} key="5" button onClick={() => this.handleAddComponent(item)}>

            <Button
              variant="contained"
              color="default"
              style={{ backgroundColor: "#FFFFFF", width: "100%", fontSize: 12}}
              startIcon={<EditIcon />}
            >
              Icon Button
            </Button>

          </ListItem>);

      default:
        return (

          <ListItem key={`${item}${index}`} button onClick={() => this.handleAddComponent(item)}>
          </ListItem>
        );
    }

  }
  render() {
    const { components } = this.props;
    return (
      <Container style={{ fontSize: 14 }} maxWidth="sm">
        <Box style={{ backgroundColor: "#FFFFFF", width: "100%" }}>
          <List style={{ fontSize: 14 }} component="nav">
            {components.map((item, index) => this.renderListItems(item, index))}
          </List>
        </Box>
      </Container>
    );
  }
}

ComponentList.propTypes = {
  components: arrayOf(string),
  addComponent: func
}
export default ComponentList;
