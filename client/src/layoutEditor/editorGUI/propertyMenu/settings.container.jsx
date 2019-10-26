import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getViews } from '../../../selectors/view';
import { addView, saveViews } from '../../../storeActions/view';
import Settings from './settings';


class SettingsContainer extends Component {
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
        return (<Settings view={this.props.view} save={this.saveView} />)
    }
}
const mapStateToPros = state => {
    const views = getViews(state);
    return { views };
  }
  
const mapDispatchToProps = dispatch =>
    bindActionCreators({ addView, saveViews }, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(SettingsContainer);