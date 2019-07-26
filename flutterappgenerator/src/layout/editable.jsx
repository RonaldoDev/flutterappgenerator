import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Container, TextField } from '@material-ui/core';
import Draggable from 'react-draggable'



class Editable extends Component {
    constructor(){
        super();
        this.state = {
            result : 0
        }
    }

    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };
    
    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        return (
            <div className="box" style={{height: '1000px', width: '1000px', position: 'relative', overflow: 'auto', padding: '0'}}>
                <div style={{height: '1000px', width: '400px', padding: '10px', border: '2px solid green' }}>
                    <Draggable bounds="parent">
                    <div style={{width: '200px'}}>
                        <TextField
                            id="standard-name"
                            label="Name"
                            margin="normal"
                        />
                    </div>
                    </Draggable>
                </div>
            </div>
          );
    }
}

export default Editable;