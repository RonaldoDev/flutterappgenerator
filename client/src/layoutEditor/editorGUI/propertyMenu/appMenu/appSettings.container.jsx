import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTheme, saveViews } from '../../../../storeActions/view';
import { getCurrentTab } from '../../../nav/nav.selectors';
import { selectTab } from '../../../nav/nav.actions';
import { getViews } from '../../../../selectors/view';
import AppSettings from './appSettings';


class AppSettingsContainer extends Component {
  constructor() {
    super();
    this.saveView = this.saveView.bind(this);
  }
  saveView = (view) => {
    const { selectTab, views, saveViews } = this.props;
    const newViews = views.reduce((total, p_view) => {
      if (view.id === p_view.id) {
        total.push(p_view);       
        return total;
      }
      total.push(p_view);
      return total;
    }, []);
    // selectTab(view);
    saveViews(newViews);
  }
  saveTheme = (param) => {
    this.props.changeTheme(param)
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
  return { currentTab, views };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeTheme, saveViews, selectTab }, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(AppSettingsContainer);