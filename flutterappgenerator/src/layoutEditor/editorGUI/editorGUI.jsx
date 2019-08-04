import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Container, TextField } from '@material-ui/core';
import { DraggableCore } from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import ReactGridLayout from 'react-grid-layout';
import "react-grid-layout/css/styles.css";
import './style.css';



class EditorGUI extends Component {
  static defaultProps = {
    className: "layout",
    items: 20,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 4
  };
  
  renderItems() {
        return (<div key="b">
             <TextField style={{width:'100%'}}
               id="standard-name"
               label="Name"
               margin="normal"
               /></div>)
    };
    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        var layout = [
            // {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            // {i: 'c', x: 4, y: 0, w: 1, h: 2}
          ];
          return (
            <Container maxWidth="lg">
            <div className="phone">
             <div className="screen">        
                <ReactGridLayout cols={4}
                            rowHeight={40}
                            width={300}
                            static={false}
                            isDraggable={true}
                            useCSSTransforms
                            compactType={null}
                            preventCollision={true}
                            isResizable={true}
                            className="layout" maxRows={20} layout={layout} >
                {this.renderItems()}
                </ReactGridLayout>
             </div>
             </div>
             </Container>
          )
        // return (
        //                 {/* <DraggableCore bounds="parent"> */}
        //                 <ResizableBox className="box" width={200} height={50} draggableOpts={{
        //     grid: [25, 25],
        //     onStart: function() {console.log('drag start')},
        //     onDrag: function() {console.log('drag')},
        //     onStop: function() {console.log('drag stop')}
        //   }} axis="x">
        //                     <TextField
        //                     id="standard-name"
        //                     label="Name"
        //                     margin="normal"
        //                     />
        //                 </ResizableBox>
        //                 {/* </DraggableCore> */}
        //         </div>
        //     </div>
        //   );
        // <div key="a">a</div>
        // <div key="b">
        //     <TextField style={{width:'100%'}}
        //       id="standard-name"
        //       label="Name"
        //       margin="normal"
        //       /></div>
        // <div key="c">c</div>
    }
}

export default EditorGUI;