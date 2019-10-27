import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
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
        <ListItemText primaryTypographyProps={{ style: { fontSize: 14 }}} primary={`navigate: ${item}`}/>
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
            expandIcon={<ExpandMoreIcon style={{ fontSize : "1.5rem"  }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: "1rem" }}>Name</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextField label="Nome" value={text} onChange={evt => this.onSetName(evt.target.value)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>


        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize : "1.5rem"  }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: "1rem" }}>Color</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

          <SwatchesPicker
            width="100%"
            height={500}
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