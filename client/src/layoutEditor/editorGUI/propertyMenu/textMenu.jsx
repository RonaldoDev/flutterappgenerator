import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import {
  MenuItem,
  Select,
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
    this.state = {
        fontSize: 12
    }
    this.send = this.send.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeFontSize = this.handleChangeFontSize.bind(this);
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

    this.send({ textColor: color.hex });
  }
  handleChangeFontSize(event) {
    this.setState({ fontSize: event.target.value });
    this.send({ fontSize: event.target.value });
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
            <Typography style={{ fontSize: 14 }}>Component Description</Typography>
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
            <Typography style={{ fontSize: 14 }}>Text Color</Typography>
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
            <Typography style={{ fontSize: 14 }}>Font-size</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          {/* <InputLabel htmlFor={id}></InputLabel> */}
                <Select
                    fullWidth
                    value={this.state.fontSize}
                    onChange={evt => this.handleChangeFontSize(evt)}
                    inputProps={{
                    name: "fontSize",
                    }}
                >
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                </Select>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>

    )
  }
}


export default TextMenu

