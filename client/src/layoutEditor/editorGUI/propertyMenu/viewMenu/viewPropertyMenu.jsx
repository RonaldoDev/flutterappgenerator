import React, { Component } from 'react';
import {
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppSettingsContainer from '../appMenu/appSettings.container';


class ViewPropertyMenu extends Component {
  render() {
    const { view } = this.props;
    console.log(view.id)
    return (<Box style={{ height: "500px" }}>
     
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: 14 }} >App Settings</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <AppSettingsContainer />
      </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: 14 }} >View Settings</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <AppSettingsContainer />
      </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>)
  }
}

export default ViewPropertyMenu