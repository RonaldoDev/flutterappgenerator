import React, { Component } from 'react';
import {
  Button,
  TextField,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel

} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ActionMenu extends Component {
  constructor() {
    super();
    this.state = {
      selectValue: "",

    }
    this.handleChangeKeyboad = this.handleChangeKeyboad.bind(this);
    this.send = this.send.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleAddAction = this.handleAddAction.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }
  send(obj) {
    this.props.handleUpdateComponents(obj);
  }
  onSetName = (value) => {
    this.send({ website: value });
  }
  handleChangeColor(color) {
    this.send({ color: color.hex });
  }
  handleAddAction(event) {
    this.send({ action: { type: 'navigate', value: event.target.textContent } });
  }

  handleChangeKeyboad(evt) {
    this.send({ keyboardType: evt.target.value }) 
  }
  handleChange(value) {
    this.setState({value: value});
  }
  handleSubmit(event) {
    const { items } = this.props.component;
    items.push({ key: items.length + 1, label: this.state.selectValue });
    this.send({ items: items });
    event.preventDefault();
  }
  handleDelete(item) {
    const { items } = this.props.component;
    let filteredItems = items.filter(f => f.key !== item.key);
    filteredItems.forEach((elem, index) => elem.key = index );
    this.send({ items: filteredItems }) 
  }

  renderListItems(item, index) {
    return (
      <ListItem key={`${item}${index}`} button onClick={this.handleAddAction}>
        <ListItemText primary={`${item}`} />
      </ListItem>
    );
  }

  renderActions() {
    const { component, views } = this.props;
    return (<ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ fontSize: "1rem" }} >Navigate into</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {component.type === 'webview' && <TextField label="Webview URL" placeholder="http://example.com" onChange={evt => this.onSetName(evt.target.value)} />}
        {['button', 'iconButton'].includes(component.type) &&
          <List component="nav">
            {views.length ? views.map((view, index) => this.renderListItems(view, index)) : "No Actions"}
          </List>}

      </ExpansionPanelDetails>
    </ExpansionPanel>);
  }

  renderValidation(keyboard) {
    return (<ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ fontSize: "1rem" }}>Validation Actions</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
      <FormControl style={{width:'100%'}} >
                <InputLabel htmlFor="id">Keyboard type</InputLabel>
          <Select
              style={{width:'100%'}}
              inputProps={{
              name: "Keyboard type",
              id: "id"
              }}
              defaultValue={keyboard}
              onChange={this.handleChangeKeyboad}
          >
            <MenuItem value="Alphabetical" >Alphabetical</MenuItem>
            <MenuItem value="Just Numbers" >Just Numbers</MenuItem>
              
          </Select>
          </FormControl>
      </ExpansionPanelDetails>
    </ExpansionPanel>)
  }

  renderInclude(items) {
    return (<ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ fontSize: "1rem" }}>Control Actions</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <form onSubmit={this.handleSubmit} >
          <TextField label="Select item name" placeholder="Set item" onChange={evt => this.handleChange(evt.target.value)} />
          <Button type="submit"> Add </Button>    
        </form>
        <Paper >
          {items.map(item => 
              <Chip
                key={item.key}
                label={item.label}
                onDelete={() => this.handleDelete(item)}
              />
          )}
        </Paper>
      </ExpansionPanelDetails>
    </ExpansionPanel>)
  }
  render() {
    const { component } = this.props;
    return (
      <div style={{ width: "100%" }}>
        {component.type === 'textField' &&
          this.renderValidation(component.keyboardType)
        }
        {['button', 'iconButton', 'webview'].includes(component.type) &&
          this.renderActions()
        }
        {
          component.type === 'select' &&
          this.renderInclude(component.items)
        }
      </div>

    )
  }
}


export default ActionMenu