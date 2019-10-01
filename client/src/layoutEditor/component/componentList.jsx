import React, { Component } from 'react';
import { func, arrayOf, string } from 'prop-types';
import {
  Grid,
  MenuItem,
  Select,
  Box,
  TextField,
  Container,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Icon,
  List,
  ListItem,
  ListItemText

} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ComponentList extends Component {
    constructor(){
        super();
        this.handleAddComponent = this.handleAddComponent.bind(this)
    }
    handleAddComponent(componentName) {
      const { addComponent } = this.props
      addComponent(componentName);
    }
    renderButton() {
      return <ExpansionPanel style={{ width: "100%" }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Buttons</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ width: "100%" }}>
        <List component="nav">
          <ListItem style={{ width: "100%" }} key="01" button onClick={() =>this.handleAddComponent("button")}>
              <ListItemText primary={"Button"}/>
            </ListItem>
            <ListItem style={{ width: "100%" }} key="02" button onClick={() =>this.handleAddComponent("floatButton")}>
              <ListItemText primary={"Float Button"}/>
            </ListItem>
            <ListItem style={{ width: "100%"} } key="03" button onClick={() =>this.handleAddComponent("iconButton")}>
              <ListItemText primary={"Icon Button"}/>
            </ListItem>
            <ListItem style={{ width: "100%" }} key="04" button onClick={() =>this.handleAddComponent("iconLabelButton")}>
              <ListItemText primary={"Icon Label Button"}/>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    }
    renderListItems(item, index) {
      switch (item) {
        case "button":
          return this.renderButton();
         
      
        default:
          return (
        
            <ListItem key={`${item}${index}`} button onClick={this.handleAddComponent}>
              <ListItemText primary={item}/>
            </ListItem>
          );
      }
     
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
