import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Menu, MenuItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import i18n from 'i18next';
import TabControlContainer from './tabControl.container';


class ActionMenu extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: false
    }
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleToogleMenu = this.handleToogleMenu.bind(this);
  }
  handleGenerate() {
    this.handleToogleMenu();
    this.props.generateCode()
  }
  handleToogleMenu() {
    this.setState({ anchorEl: !this.state.anchorEl});
  }
  render() {
    const { anchorEl } = this.state;
    const classes = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(0),

      },
      title: {
        flexGrow: 1,
      },
    }));
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              edge="start" 
              className={classes.menuButton}
              
              color="inherit" 
              aria-controls="simple-menu" aria-haspopup="true" 
              onClick={this.handleToogleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              style={{ marginTop: "50px" }}
              getContentAnchorEl={null}
              open={Boolean(anchorEl)}
              onClose={this.handleToogleMenu}
            >
              <MenuItem onClick={this.handleGenerate}>{i18n.t("generate")}</MenuItem>
              <MenuItem onClick={() => {}}>{i18n.t("save")}</MenuItem>
            </Menu>
            <Typography variant="h6" className={classes.title}>
              {i18n.t("app-title")}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  } 
}

export default ActionMenu;