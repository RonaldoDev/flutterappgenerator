import React, { Component } from 'react';
import {
  Box,
  TextField,
} from '@material-ui/core';
import ThemeSettings from './theme';

class AppSettingsMenu extends Component {
  constructor() {
    super();
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeFont = this.handleChangeFont.bind(this);
  }

  handleChangeColor(color, type) {
    this.props.save({ palette: { [type]: { main: color.hex } }});
  }
  handleChangeFontColor(color, type) {
    this.props.save({ palette: { [type]: { main: color.hex } }});
  }
  handleChangeFont(_, value) {
    this.props.save({ typography: { fontSize: value } });
  }
  render() {
    return (<Box style={{ height: "500px" }}>   
        <TextField label="Nome" fullWidth value="" onChange={evt => this.handleSave(evt.target.value)} />
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