import React, { Component } from 'react';
import {
  Box,
  TextField,
} from '@material-ui/core';
import { debounce } from 'lodash-cli';
import ThemeSettings from './theme';

class AppSettingsMenu extends Component {
  constructor() {
    super();
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeFont = this.handleChangeFont.bind(this);
  }
  handleChangeName(value) {
     const newView = { ...this.props.view, appName: value };
     this.props.save(newView);
  }
  handleChangeColor(color, type) {
    this.props.saveTheme({ palette: { [type]: { main: color.hex } }});
  }
  handleChangeFontColor(color, type) {
    this.props.saveTheme({ palette: { [type]: { main: color.hex } }});
  }
  handleChangeFont(_, value) {
    this.props.saveTheme({ typography: { fontSize: value } });
  }
  render() {
    return (<Box style={{ height: "500px" }}>   
        <TextField label="Nome" fullWidth value={this.props.view.appName} onChange={evt => this.props.saveName(evt.target.value)} />
        <ThemeSettings
          changeFont={this.handleChangeFont}
          changeFontColor={this.handleChangeFontColor}
          changeColor={this.handleChangeColor}
          theme="primary"
        />
        <ThemeSettings
          changeFont={this.handleChangeFont}
          changeFontColor={this.handleChangeFontColor}
          changeColor={this.handleChangeColor}
          theme="secondary"
        />
    </Box>)
  }
}

export default AppSettingsMenu