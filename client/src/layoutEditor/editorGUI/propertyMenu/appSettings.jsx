import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import {
  Box,
  TextField,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Slider
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class ViewPropertyMenu extends Component {
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
    return (<Box style={{ height: "500px" }}>
    
        <TextField label="Nome" fullWidth value="" onChange={evt => this.handleSave(evt.target.value)} />
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: 14 }}>Theme Color Primary</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SwatchesPicker
            width="100%"
            height={500}
            onChangeComplete={(color) => this.handleChangeColor(color, "primary")} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: 14 }}>Theme Color Secondary</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SwatchesPicker
            width="100%"
            onChangeComplete={(color) => this.handleChangeColor(color, "secondary")} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: 14 }}>Font Size</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Slider
            defaultValue={12}
            onChangeCommitted={this.handleChangeFont}
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

export default ViewPropertyMenu