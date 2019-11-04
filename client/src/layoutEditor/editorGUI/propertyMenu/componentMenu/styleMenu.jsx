import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import {
  Button,
  TextField,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControlLabel,
  Typography,
  Grid,
  ListItem,
  ListItemText,
  Radio,
  Icon

} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class StyleMenu extends Component {
  constructor() {
    super();
    this.send = this.send.bind(this);
    this.state = {
      iconName: ""
    }
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  send(obj) {
    this.props.handleUpdateComponents(obj);
  }
  onSetName = (value) => {
    this.send({ text: value });
  }
  handleChangeColor(color) {
    this.send({ theme: "custom" });
    this.send({ color: color.hex });
  }
  handleChangeTheme(evt) {
    this.send({ theme: evt.target.value })
  }
  renderListItems(item, index) {
    return (
      <ListItem key={`${item}${index}`} button onClick={this.handleAddAction}>
        <ListItemText primaryTypographyProps={{ style: { fontSize: 14 } }} primary={`navigate: ${item}`} />
      </ListItem>
    );
  }
  handleOnChange(evt) {
    this.setState({ iconName: evt.target.value })
  }
  handleSubmit(event) {
    this.send({ icon: this.state.iconName });
    event.preventDefault();
  }

  render() {
    const { component } = this.props;
    const { text, theme } = component;
    console.log(theme);
    return (
      <div style={{ width: "100%" }}>
        {/* <ExpansionPanel>
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
        </ExpansionPanel> */}

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: "1rem" }}>Theme</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormControlLabel
              value="start"
              control={<Radio
                checked={theme === 'primary'}
                onChange={this.handleChangeTheme}
                color="default"
                value="primary"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Primary' }}
              />}
              label="Primary"
              labelPlacement="start"
            />
            <FormControlLabel
              value="start"
              control={<Radio
                checked={theme === 'secondary'}
                color="default"
                onChange={this.handleChangeTheme}
                value="secondary"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Secondary' }}
              />}
              label="Secondary"
              labelPlacement="start"
            />
            <FormControlLabel
              value="start"
              control={<Radio
                checked={theme === 'custom'}
                color="default"
                onChange={this.handleChangeTheme}
                value="custom"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Custom' }}
              />}
              label="Custom"
              labelPlacement="start"
            />


          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: "1rem" }}>Color</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

            <SwatchesPicker
              width="100%"
              color="#00BCD4"
              height={500}
              onChangeComplete={this.handleChangeColor} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {component.type === 'iconButton' &&
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontSize: "1rem" }}>Icon</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container>
                <Grid item xs={6}>
                  <form onSubmit={this.handleSubmit} >
                    <TextField label="Select item name" placeholder="Set item" onChange={evt => this.handleOnChange(evt)} />
                    <Button type="submit">Change Icon</Button>
                  </form>
                </Grid>
                <Grid item xs={6}>
                  <Typography style={{ fontSize: "1rem" }}>Icon Preview</Typography>
                  <Icon fontSize="large">
                    {this.state.iconName}
                  </Icon>
                </Grid>

              </Grid>


            </ExpansionPanelDetails>
          </ExpansionPanel>
        }
      </div>

    )
  }
}

// Decorate with redux-form
// PropertyMenuForm = reduxForm({
//   form: 'PropertyMenu',
// })(PropertyMenuForm)

export default StyleMenu