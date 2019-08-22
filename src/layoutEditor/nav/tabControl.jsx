import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './tabPanel'
import EditableContainer from '../editorGUI/editorGUI.container';

class TabControl extends Component {
    constructor(props) {
        super(props)
        this.a11yProps = this.a11yProps.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 0,
            views: [
                { title: "Primeira", id: 0 },
            ]
        }
    }

    a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }

    handleChange(event, newValue) {
        this.setState({ value : newValue })
    }

    renderTabItems(id, title) {
        return <Tab label={title} key={id} {...this.a11yProps(id)} />
    }

    renderItems(index) {
        const { value } = this.state;
        return (
            <TabPanel value={value} index={index} key={index}>
                <EditableContainer />
            </TabPanel>
        );
    }

    render() {
        const { value, views } = this.state;
        return (
            <div style={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} aria-label="simple tabs example">
                        {views.map(view => this.renderTabItems(view.id, view.title))}
                    </Tabs>
                </AppBar>
                {views.map(view => this.renderItems(view.id))}
            </div>
        );
    }
}
// TabControl.PropTypes = {
//     inde
// }
export default TabControl;