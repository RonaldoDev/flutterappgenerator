import React, { Component } from 'react';
import { CirclePicker } from 'react-color';
import {
  TextField,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  ListItem,
  ListItemText

} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class StyleMenu extends Component {
  constructor() {
    super();
    this.send = this.send.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }
  send(obj) {
    this.props.handleUpdateComponents(obj);
  }
  onSetName = (value) => {
    console.log(value)
    this.send({ text: value });
  }
  handleChangeColor(color) {
    console.log("color")
    this.send({ color: color.hex });
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
    console.log(component);
    return (
      <div style={{ width: "100%" }}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Name</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextField label="Nome" value={text} onChange={evt => this.onSetName(evt.target.value)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>


        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Color</Typography>
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
      </div>

    )
  }
}

// Decorate with redux-form
// PropertyMenuForm = reduxForm({
//   form: 'PropertyMenu',
// })(PropertyMenuForm)

export default StyleMenu