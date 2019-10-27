import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getViews } from '../../../../selectors/view';
import { getCurrentTab } from '../../../nav/nav.selectors';
import { saveViews } from '../../../../storeActions/view';
import ViewSettings from './viewSettings';


class ViewSettingsContainer extends Component {
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
      const { currentTab, views } = this.props;
        return (<ViewSettings view={views.filter(v => v.id === currentTab.id)[0]} save={this.saveView} />)
    }
}
const mapStateToPros = state => {
    const views = getViews(state);
    const currentTab = getCurrentTab(state);
    return { views, currentTab };
  }
  
const mapDispatchToProps = dispatch =>
    bindActionCreators({ saveViews }, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(ViewSettingsContainer);