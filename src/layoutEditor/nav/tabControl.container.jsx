import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getComponentList } from '../../reducers/selectors';
// import { addComponent } from './components.actions';    
import TabControl from './tabControl';
// import { arrayOf, func, string } from 'prop-types';
// import getComponent from './components';

class TabControlContainer extends Component {
    // handleAddComponent = (componentType) => {
    //     const component = getComponent(componentType);
    //     const comp = { component : component, id: component.i, type: componentType};
    //     this.props.addComponent(comp);
    // };
    render(){
        // const { componentList } = this.props;
        return (<TabControl />)
    }
}

// ActionMenuContainer.propTypes = {
//     componentList: arrayOf(string),
//     addComponent: func
// }

// const mapStateToPros = state => {
//     const componentList = getComponentList(state);
//     return { componentList };
// }

// const mapDispatchToProps = dispatch => 
//     bindActionCreators({ addComponent }, dispatch);

export default connect(null, null)(TabControlContainer);