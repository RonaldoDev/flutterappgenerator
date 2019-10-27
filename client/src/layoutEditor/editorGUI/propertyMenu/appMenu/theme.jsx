import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import {
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Slider
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class ThemeSettings extends Component {
  constructor() {
    super();
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeFont = this.handleChangeFont.bind(this);
  }

  handleChangeColor(color, type) {
    this.props.save({ palette: { [type]: { main: color.hex } }});
  }
  
  handleChangeFont(_, value) {
    this.props.save({ typography: { fontSize: value } });
  }
  render() {
    const { changeColor, changeFont, changeFontColor, theme } = this.props;
    return (<Box>
    <Typography style={{ fontSize: 14, margin: 5, fontWeight: "bold" }} >{theme === "primary" ? "Primary" : "Secondary"}</Typography>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: "1rem" }}>Theme Color</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SwatchesPicker
            width="100%"
            height={500}
            onChangeComplete={(color) => changeColor(color, theme)} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography style={{ fontSize: "1rem" }}>Font Color</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SwatchesPicker
            width="100%"
            onChangeComplete={(color) =>  changeFontColor(color, theme)} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: "1rem" }}>Font Size</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Slider
            defaultValue={12}
            onChangeCommitted={(evt, value) => changeFont(evt, value)}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            // marks
            min={8}
            max={24}
        />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>)
  }
}

export default ThemeSettings