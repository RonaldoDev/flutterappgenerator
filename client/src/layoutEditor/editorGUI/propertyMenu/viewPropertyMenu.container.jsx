import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentTab, getViews } from '../../nav/nav.selectors';
import { addView, saveViews, selectTab } from '../../nav/nav.actions';
import ViewPropertyMenu from './viewPropertyMenu';


class ViewPropertyMenuContainer extends Component {
    constructor() {
        super();
        this.saveView = this.saveView.bind(this);
    }
    saveView = (p_view) => {
        const newViews = this.props.views.reduce((total, view) => {
          if (view.id === p_view.id) {
            total.push(p_view);
            return total;
          }
          total.push(view);
          return total;
        }, []);
        
        this.props.saveViews(newViews);
      }
    render(){
        return (<ViewPropertyMenu view={this.props.view} save={this.saveView} />)
    }
}
const mapStateToPros = state => {
    const views = getViews(state);
    const currentTab = getCurrentTab(state);
    return { views, currentTab };
  }
  
const mapDispatchToProps = dispatch =>
    bindActionCreators({ addView, saveViews, selectTab }, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(ViewPropertyMenuContainer);