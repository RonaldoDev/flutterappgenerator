import React, { Component } from 'react';
import { func, arrayOf, string } from 'prop-types';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography

} from '@material-ui/core'
import { 
  CameraAlt as CameraArtIcon,
  Edit as EditIcon ,
  Map as MapIcon,
  Http as HttpIcon,
} from '@material-ui/icons';
import i18n from 'i18next';


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
      case "text":
          return (<ListItem style={{ width: "100%" }} key="0" button onClick={() => this.handleAddComponent(item)}>
                     <Button
                      variant="contained"
                      color="default"
                      style={{ backgroundColor: "#FFFFFF", width: "100%", fontSize: 12}}
                    >
                      {i18n.t("text")}
                    </Button>
                </ListItem>);
      case "button":
        return (<ListItem style={{ width: "100%" }} key="1" button onClick={() => this.handleAddComponent(item)}>
                   <Button
              variant="contained"
              color="default"
              style={{ backgroundColor: "#FFFFFF", width: "100%", fontSize: 12}}
            >
              {i18n.t("button")}
            </Button>
        </ListItem>)

      case "textField":
        return (
          <ListItem style={{ width: "100%" }} key="2" button onClick={() => this.handleAddComponent(item)}>
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
              {i18n.t("icon-button")}
            </Button>

          </ListItem>);
      case "camera":
          return (
            <ListItem className="icon-button" style={{ width: "100%" }} key="6" button onClick={() => this.handleAddComponent(item)}>
  
              <Button
                variant="contained"
                color="default"
                style={{ backgroundColor: "#FFFFFF", width: "100%", fontSize: 12}}
                startIcon={<CameraArtIcon />}
              >
                {i18n.t("camera")}
              </Button>
  
            </ListItem>);
       case "map":
          return (
            <ListItem className="icon-button" style={{ width: "100%" }} key="7" button onClick={() => this.handleAddComponent(item)}>
  
              <Button
                variant="contained"
                color="default"
                style={{ backgroundColor: "#FFFFFF", width: "100%", fontSize: 12 }}
                startIcon={<MapIcon />}
              >
                {i18n.t("map")}
              </Button>
  
            </ListItem>);
      case "webview":
          return (
            <ListItem className="icon-button" style={{ width: "100%" }} key="8" button onClick={() => this.handleAddComponent(item)}>
  
              <Button
                variant="contained"
                color="default"
                style={{ backgroundColor: "#FFFFFF", width: "100%", fontSize: 12}}
                startIcon={<HttpIcon />}
              >
                {i18n.t("web-view")}
              </Button>
  
            </ListItem>);

      default:
        return (
          <div style={{ backgroundColor: "#ebebf0" }}>
          <ListItem key={`${item}${index}`}>
            <ListItemText primary={
            <Typography type="body2" style={{ color: '#090C12', fontWeight: "bold",  fontSize: 15 }}>
             {i18n.t(item)}
            </Typography>} ></ListItemText>
           
          </ListItem>
            <Divider style={{ height: 2, color:"#828282" }} />
        
          </div>
          
        );
    }

  }
  render() {
    const { components } = this.props;
    return (
   
        <Box style={{ backgroundColor: "#FFFFFF", width: "100%" }}>
          <List style={{ fontSize: "1rem" }} component="nav">
            {components.map((item, index) => this.renderListItems(item, index))}
         
          </List>
        </Box>
 
    );
  }
}

ComponentList.propTypes = {
  components: arrayOf(string),
  addComponent: func
}
export default ComponentList;
