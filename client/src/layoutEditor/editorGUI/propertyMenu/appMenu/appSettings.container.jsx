import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTheme, saveViews } from '../../../../storeActions/view';
import { getCurrentTab } from '../../../nav/nav.selectors';
import { selectTab } from '../../../nav/nav.actions';
import { getViews } from '../../../../selectors/view';
import AppSettings from './appSettings';
import { getTheme } from '../../../../reducers/selectors';


class AppSettingsContainer extends Component {
  constructor() {
    super();
    this.saveView = this.saveView.bind(this);
  }
  saveView = (view) => {
    const { selectTab, views, saveViews } = this.props;
    const newViews = views.reduce((total, p_view) => {
      debugger;
      if (view.id === p_view.id) {
        debugger;
        total.push(view);       
        return total;
      }
      total.push(p_view);
      return total;
    }, []);
    selectTab(view);
    saveViews(newViews);
  }
  saveTheme = (param, themeType) => {
    const { changeTheme, theme } = this.props;
    const type = Object.keys(param)[0]
    if (themeType == "palette") {
      const newType = { ...theme.palette[type], ...param[type] };
      let newTheme = theme
      newTheme.palette[type] = newType;
      changeTheme(newTheme);
    }
    if (themeType == "typography") {
      const newType = { ...theme.typography, ...param };
      let newTheme = theme
      newTheme.typography = newType;
      debugger
      changeTheme(newTheme);
    }
  }
  
  render() {
    const { currentTab, views } = this.props;
    return (
      <AppSettings 
        saveTheme={this.saveTheme} 
        view={views.filter(v => v.id === currentTab.id)[0]}
        saveName={this.saveView} 
      />);
  }
}

const mapStateToPros = state => {
  const views = getViews(state);
  const currentTab = getCurrentTab(state);
  const theme = getTheme(state);
  return { currentTab, views, theme };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeTheme, saveViews, selectTab }, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(AppSettingsContainer);