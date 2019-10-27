import React, { Component } from 'react';
import {
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppSettingsContainer from './appMenu/appSettings.container';
import ViewSettingsContainer from './viewMenu/viewSettings.container';


class Settings extends Component {
  render() {
    const { view } = this.props;
    return (
        <Box>
          { view.id === 0 && 
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontSize: "1rem" }} >App Settings</Typography>
              </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <AppSettingsContainer />
            </ExpansionPanelDetails>
          </ExpansionPanel>}
          { view.id === 0 && 
            <ExpansionPanel >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ fontSize: "1.5rem" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontSize: "1rem" }} >View Settings</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ViewSettingsContainer />
            </ExpansionPanelDetails>
            </ExpansionPanel>}
          {view.id !== 0 &&
            <Box style={{ padding: 20 }}>
              <Typography  style={{ fontSize: "1rem", color: "#090C12" }} >View Settings</Typography>
              <ViewSettingsContainer />
            </Box>
          }
        </Box>)
  }
}

export default Settings