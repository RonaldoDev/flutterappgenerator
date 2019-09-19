import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentTab, getViews } from './nav.selectors';
import { addView, saveViews, selectTab } from './nav.actions';
import TabControl from './tabControl';
// import { arrayOf, func, string } from 'prop-types';
// import getComponent from './components';

class TabControlContainer extends Component {
  constructor() {
    super();
    this.state = {
      a : 0
    }
  }
  saveView = () => {
    const newViews = this.props.views.reduce((total, view) => {
      if (view.id === this.props.currentTab.id) {
        total.push({...view, components : this.props.currentTab.components});
        return total;
      }
      total.push(view);
      return total;
    }, []);
    this.props.saveViews(newViews);
  }
  handleSelectTab = (tabId) => {
    this.saveView();
    this.props.views.forEach((view) => view.id === tabId ? this.props.selectTab(view) : null);
  };
  handleAddView = () => {
    const { addView, views } = this.props;
    const newView = { id: views.length, title: `view${views.length}`, components: [], selectedComponent: {}}
    addView(newView);
  }

  render() {
    const { views, currentTab } = this.props;
    return (<TabControl views={views} currentTab={currentTab} selectTab={this.handleSelectTab} addView={this.handleAddView} />)
  }
}

// ActionMenuContainer.propTypes = {
//     componentList: arrayOf(string),
//     addComponent: func
// }

const mapStateToPros = state => {
  const views = getViews(state);
  const currentTab = getCurrentTab(state);
  return { views, currentTab };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addView, saveViews, selectTab }, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(TabControlContainer);