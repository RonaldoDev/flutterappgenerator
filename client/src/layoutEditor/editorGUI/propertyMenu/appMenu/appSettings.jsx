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
    this.handleChangeFontColor = this.handleChangeFontColor.bind(this);
  }
  handleChangeName(value) {
     const newView = { ...this.props.view, appName: value };
     debugger;
     this.props.saveName(newView);
  }
  handleChangeColor(color, type) {
    this.props.saveTheme({[type]: { main: color.hex } },  "palette");
  }
  handleChangeFontColor(color, type) {
    this.props.saveTheme({[type]: { contrastText: color.hex } }, "palette");
  }
  handleChangeFont(_, value) {
    this.props.saveTheme({ fontSize: value }, "typography");
  }
  render() {
    const { view } = this.props;
    return (<Box style={{ height: "500px" }}>   
        <TextField label="Nome" fullWidth value={view.appName} onChange={evt => this.handleChangeName(evt.target.value)} />
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