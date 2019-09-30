import React, { Component, useState } from 'react';
import { CirclePicker } from 'react-color';
import { reduxForm, Field } from 'redux-form'
// import MenuItem from 'material-ui/MenuItem'
// import { RadioButton } from 'material-ui/RadioButton'
import {
  Grid,
  MenuItem,
  Select,
  Box,
  TextField,
  Container,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Icon,
  List,
  ListItem,
  ListItemText

} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { ExpandMoreIcon } from '@material-ui/icons';

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
    console.log(props.component.fontSize)
    this.setState({ fontSize: props.component.fontSize });
  }
  send(obj) {
    this.props.handleUpdateComponents(obj);
  }
  onSetName = (value) => {
    this.send({ text: value });
  }
  handleChangeColor(color, event) {

    this.send({ textColor: color.hex });
  }
  handleChangeFontSize(event) {
    this.setState({ fontSize: event.target.value });
    this.send({ fontSize: event.target.value });
  }
  renderListItems(item, index) {
    return (
      <ListItem key={`${item}${index}`} button onClick={this.handleAddAction}>
        <ListItemText primary={`navigate: ${item}`}/>
      </ListItem>
    );
  }

  render() {
    const { component } = this.props;
    const { text } = component;
    const isButton = component.hasAction
    
    return (
      <div style={{ width: "100%" }}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Component Description</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextField label="Nome" fullWidth value={text} onChange={evt => this.onSetName(evt.target.value)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>


        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Text Color</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CirclePicker
             width="100%"
             circleSize={20}
             colors= {['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', 
                       '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', 
                       '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', 
                       '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']}
             onChangeComplete={this.handleChangeColor} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Font-size</Typography>
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

