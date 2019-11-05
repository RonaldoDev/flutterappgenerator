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
  InputLabel,
  Grid

} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import i18n from 'i18next';

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
    this.setState({ selectValue: value });
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
    filteredItems.forEach((elem, index) => elem.key = index);
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
        <Typography style={{ fontSize: "1rem" }} >{`${i18n.t("navigate")} ${i18n.t("into")}`}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {component.type === 'webview' && <TextField label={i18n.t("webview-url")} placeholder={i18n.t("http-example")} onChange={evt => this.onSetName(evt.target.value)} />}
        {['button', 'iconButton'].includes(component.type) &&
          <List component="nav">
            {views.length ? views.map((view, index) => this.renderListItems(view, index)) : i18n.t("no-actions")}
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
        <Typography style={{ fontSize: "1rem" }}>{i18n.t("validation-actions")}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <FormControl style={{ width: '100%' }} >
          <InputLabel htmlFor="id">{i18n.t("keyboard-type")}</InputLabel>
          <Select
            style={{ width: '100%' }}
            inputProps={{
              name: "Keyboard type",
              id: "id"
            }}
            defaultValue={keyboard}
            onChange={this.handleChangeKeyboad}
          >
            <MenuItem value="Alphabetical" >{i18n.t("alphabetical")}</MenuItem>
            <MenuItem value="Just Numbers" >{i18n.t("just-numbers")}</MenuItem>

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
        <Typography style={{ fontSize: "1rem" }}>{i18n.t("control-actions")}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container>
          <Grid item xs={12}>
          <Paper >
              {items.map(item =>
                <Chip
                  key={item.key}
                  label={item.label}
                  onDelete={() => this.handleDelete(item)}
                />
              )}
            </Paper>
            
          </Grid>
          <Grid item xs={12}>
          <form onSubmit={this.handleSubmit} >
              <TextField label={i18n.t("item-name")} placeholder={i18n.t("set-item-name")} onChange={evt => this.handleChange(evt.target.value)} />
              <Button type="submit"> {i18n.t("add")} </Button>
            </form>
          </Grid>

        </Grid>



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