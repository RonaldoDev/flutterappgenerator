import React, { Component, createContext, useState } from 'react';
import ReactDOM from 'react-dom';
    
import ComponentList from './componentList';


class ComponentListContainer extends Component {
    constructor(){
        super();
    }
    render(){
        return (<ComponentList />)
    }
}
export default ComponentListContainer