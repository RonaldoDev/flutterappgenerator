import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './tabPanel'
import EditableContainer from '../editorGUI/editorGUI.container';
import i18n from 'i18next';

class TabControl extends Component {
    constructor(props) {
        super(props)
        this.a11yProps = this.a11yProps.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }

    handleChange(event, newValue) {
        this.props.selectTab(newValue);
        this.setState({ value: 1})
    }

    renderTabItems(id, title) {
        return <Tab label={title} key={id} {...this.a11yProps(id)} />
    }

    renderItems(index) {
        return (
            <TabPanel value={index} index={index} key={index}>
                <EditableContainer />
            </TabPanel>
        );
    }

    render() {
        const { currentTab, views, addView } = this.props;
        return (
            <div style={{ flexGrow: 1}}>
                <AppBar position="static" style={{ flexGrow: 1}}>
                <Toolbar>
                <Button color="inherit" onClick={() => addView()}>{i18n.t("add")}</Button>
                    <Tabs value={currentTab.id} onChange={this.handleChange} aria-label="simple tabs example">
                        {views.map(view => this.renderTabItems(view.id, view.title))}
                    </Tabs>
                </Toolbar>
                </AppBar>
                {/* {views.map(view => this.renderItems(view.id))} */}
                {this.renderItems(views[0].id)}
            </div>
        );
    }
}
// TabControl.PropTypes = {
//     inde
// }
export default TabControl;