import React, { Component, createContext } from 'react';
import ReactDOM from 'react-dom';
    
import LayoutGenerator from './layoutGenerator';


class LayoutGeneratorContainer extends Component {
    constructor(){
        super();
    }
    render(){
        return (<LayoutGenerator />)
    }
}
export default LayoutGeneratorContainer