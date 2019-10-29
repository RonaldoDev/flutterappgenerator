import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import {
  Slider,
  TextField,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class TextMenu extends Component {
  constructor(props) {
    super(props);
    this.send = this.send.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeFont = this.handleChangeFont.bind(this);
  }
  componentWillReceiveProps(props) {
    this.setState({ fontSize: props.component.fontSize });
  }
  send(obj) {
    this.props.handleUpdateComponents(obj);
  }
  onSetName = (value) => {
    this.send({ text: value });
  }
  handleChangeColor(color) {
    this.send({ theme: "custom" });
    this.send({ textColor: color.hex });
  }

  handleChangeFont(_, value) {
    this.send({ theme: "custom" });
    this.send({ fontSize: value });
  }

  render() {
    const { component } = this.props;
    const { text } = component;
    
    return (
      <div style={{ width: "100%" }}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: "1rem" }}>Component Description</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextField label="Nome" fullWidth value={text} onChange={evt => this.onSetName(evt.target.value)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>


        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: "1rem" }}>Text Color</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <SwatchesPicker
            width="100%"
            height={500}
            onChangeComplete={this.handleChangeColor} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: "1rem" }}>Font-size</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          {/* <InputLabel htmlFor={id}></InputLabel> */}
            <Slider
              defaultValue={12}
              onChangeCommitted={(evt, value) => this.handleChangeFont(evt, value)}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              // marks
              min={8}
              max={24}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>

    )
  }
}


export default TextMenu

