import React, { Component } from 'react';
import { func, arrayOf, string } from 'prop-types';
import {
  Container,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
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
      return <ExpansionPanel key="z1" style={{ width: "100%" }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem"  }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: 14 }}>Buttons</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ width: "100%" }}>
        <List component="nav">
          <ListItem style={{ width: "100%" }} key="b1" button onClick={() =>this.handleAddComponent("button")}>
              <ListItemText primaryTypographyProps={{ style: { fontSize: 14 }}} primary={"Button"}/>
            </ListItem>
            <ListItem style={{ width: "100%" }} key="b2" button onClick={() =>this.handleAddComponent("floatButton")}>
              <ListItemText primaryTypographyProps={{ style: { fontSize: 14 }}} primary={"Float Button"}/>
            </ListItem>
            <ListItem style={{ width: "100%" }} key="b3" button onClick={() =>this.handleAddComponent("iconButton")}>
              <ListItemText primaryTypographyProps={{ style: { fontSize: 14 }}} primary={"Icon Button"}/>
            </ListItem>
            <ListItem style={{ width: "100%"}} key="b4" button onClick={() =>this.handleAddComponent("iconLabelButton")}>
              <ListItemText primaryTypographyProps={{ style: { fontSize: 14 }}} primary={"Icon Label Button"}/>
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
        
            <ListItem  key={`${item}${index}`} button onClick={() => this.handleAddComponent(item)}>
              <ListItemText primaryTypographyProps={{ style: { fontSize: 14 }}}  primary={item}/>
            </ListItem>
          );
      }
     
    }
    render() {
      const { components } = this.props;
      return (
        <Container style={{ fontSize: 14 }}  maxWidth="sm">
          <List style={{ fontSize: 14 }}  component="nav">
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
