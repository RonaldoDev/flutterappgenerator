import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

class ComponentList extends Component {
    constructor(){
        super();
        this.state = {
            result : 0
        }
    }
    ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
      }
    renderListItems() {
      // should be render all list items
      // TODO: create a component to item
    }
    render() {
        return (
          <Container maxWidth="sm">
            <List component="nav">
              <ListItemLink href="#simple-list">
                <ListItemText primary="Add" />
                </ListItemLink>
                <ListItem button>
                  <ListItemIcon>
          
                    Input
                  </ListItemIcon>
                  <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  {/* <DraftsIcon /> */}
                  Botao
                </ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  {/* <DraftsIcon /> */}
                  Spinner
                </ListItemIcon>
                <ListItemText />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  {/* <DraftsIcon /> */}
                  Imagem
                </ListItemIcon>
                <ListItemText />
              </ListItem>
            </List>
            
          </Container>
        );
      }
    }


export default ComponentList;





function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
