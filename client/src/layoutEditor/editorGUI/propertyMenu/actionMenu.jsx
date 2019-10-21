import React, { Component } from 'react';
import {
  TextField,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  List,
  ListItem,
  ListItemText

} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ActionMenu extends Component {
  constructor() {
    super();
    this.send = this.send.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleAddAction = this.handleAddAction.bind(this);
    this.renderActions = this.renderActions.bind(this);
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
  handleAddAction(event) {
    this.send({ action: { type: 'navigate', value: event.target.textContent }});
  }
  renderListItems(item, index) {
    return (
      <ListItem key={`${item}${index}`} button onClick={this.handleAddAction}>
        <ListItemText primary={`${item}`}/>
      </ListItem>
    );
  }
  renderActions() {
    const { views } = this.props;
    return(<ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Method Actions</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <List component="nav">
            {views.length ? views.map((view, index) => this.renderListItems(view, index)) : "No Actions"}
          </List>
            
          </ExpansionPanelDetails>
        </ExpansionPanel>);
  }

  render() {
    const { component } = this.props;
    const { text } = component;
    return (
      <div style={{ width: "100%" }}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Validation Actions</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextField label="Nome" value={text} onChange={evt => this.onSetName(evt.target.value)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {this.renderActions()}
      </div>

    )
  }
}


export default ActionMenu