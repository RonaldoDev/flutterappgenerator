import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import i18n from 'i18next';



class ActionMenu extends Component {
  
  render() {
    const { generateCode } = this.props;
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
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {i18n.t("app-title")}
            </Typography>
            <Button color="inherit" onClick={generateCode}>{i18n.t("save")}</Button>
            <Button color="inherit">{i18n.t("generate")}</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  } 
}

export default ActionMenu;