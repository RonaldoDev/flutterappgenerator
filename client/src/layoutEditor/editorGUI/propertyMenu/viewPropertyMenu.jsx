import React, { Component } from 'react';
import {
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppSettingsContainer from './appSettings.container';


class ViewPropertyMenu extends Component {
  render() {
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

    </Box>)
  }
}

export default ViewPropertyMenu